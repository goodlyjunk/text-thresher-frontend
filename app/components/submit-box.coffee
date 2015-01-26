`import Ember from "ember";`
`import config from "../config/environment"`

Component = Ember.Component.extend

	classNames: ["question-bubble"]

	actions:
		submit: ->
			data = []
			annotator = @get('annotator')
			highlightGroups = annotator.get('tua.highlightGroups')
			tuaId = annotator.get('tua.id')
			highlightGroups.forEach (highlightGroup) ->
				newData =
					id: tuaId
					offsets: []
					questions: []
				highlightGroup.get('highlights').forEach (highlight) ->
					newData.offsets.push [highlight.get('start'), highlight.get('stop')]
					highlightGroup.get('qa').forEach (qa) ->
						type = qa.choice.get('constructor.typeKey')
						answer = switch type
							when "answer" then qa.choice.id
							when "checkListAnswer" then qa.choice.get('selectedAnswers').map (answer) -> answer.id
							when "textAnswer" then qa.choice.get('text')
							when "timeAnswer" then qa.choice.get('time')
						unless type == "topic"
							newData.questions.push
								id: qa.question.id
								answer: answer
				data.push newData
			request = Ember.$.post config.APP.API_HOST + "/api/highlight_groups/", { "": data }
			request.done( (response) ->
				url = annotator.get('tua.nextUrl')
				Ember.$.ajax
					type: "GET"
					dataType: "JSON"
					url: url
					success: (payload) ->
						store = annotator.get('tua').store
						nextUrl = payload.next
						tuas = payload.results
						analysisTypes = Ember.A()
						topics = Ember.A()
						questions = Ember.A()
						answers = Ember.A()

						tuas.forEach (tua) ->
							analysisTypes.pushObject tua.analysis_type
							tua.analysisType = tua.analysis_type.id
							tua.nextUrl = nextUrl
							tua.text = tua.article.text
							delete tua.analysis_type

						analysisTypes.forEach (analysisType) ->
							analysisType.questionDependencies = analysisType.question_dependencies
							delete analysisType.question_dependencies
							if analysisType.topics.length
								topics.pushObjects analysisType.topics
								analysisType.topics = analysisType.topics.map (topic) ->
									topic.id

						topics.forEach (topic) ->
							questions.pushObjects topic.questions
							topic.questions = topic.questions.map (question) ->
								question.id = topic.id + "." + question.id
								question.id

						questions.forEach (question) ->
							answers.pushObjects question.answers
							question.answers = question.answers.map (answer) ->
								answer.id = question.id + "." + answer.id
								answer.id

						store.pushMany('answer', answers)
						store.pushMany('question', questions)
						store.pushMany('topic', topics)
						store.pushMany('analysis-type', analysisTypes)
						tuas = store.pushMany('tua', tuas)

						annotator.set('tuas', tuas)
			)

`export default Component;`
