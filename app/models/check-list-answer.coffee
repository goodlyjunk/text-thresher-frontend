Model = DS.Model.extend

  question: DS.belongsTo("question")
  selectedAnswers: DS.hasMany("answers")

  text: (->
    answers = @get("selectedAnswers").map (answer) -> answer.get("text")
    answers.join(", ")
  ).property("selectedAnswers.@each")

  dependencies: (topic, question) ->
    _this = this
    dependencies = []
    questionDependencies = question.get("dependencies")
    if questionDependencies
      questionDependencies.forEach (dependency)->
      	_this.get('selectedAnswers').forEach (selectedAnswer) ->
	        if dependency.if == selectedAnswer.get('id')
	          newQuestion = topic.get('questions.content').filterBy('id', dependency.then)[0]
	          dependencies.push(newQuestion) if dependencies.indexOf(newQuestion) == -1
    dependencies

`export default Model`