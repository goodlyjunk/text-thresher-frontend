`import Ember from "ember";`
`import DS from 'ember-data'`

Serializer = DS.RESTSerializer.extend

  pushPayload: (store, payload) ->
    return @extractArray(store, payload.type, payload.payload)

  extractArray: (store, type, payload) ->
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
          topic.topicId = topic.topic_id
          topic.id

    topics.forEach (topic) ->
      questions.pushObjects topic.questions
      topic.questions = topic.questions.map (question) ->
        questionId = if question.question_id < 10 then "0" + question.question_id else question.question_id
        question.questionId = topic.topicId + "." + questionId
        question.id

    questions.forEach (question) ->
      answers.pushObjects question.answers
      question.answers = question.answers.map (answer) ->
        answerId = if answer.answer_id < 10 then "0" + answer.answer_id else answer.answer_id
        answer.answerId = question.questionId + "." + answerId
        answer.id

    payload =
      tuas: tuas
      analysisTypes: analysisTypes
      topics: topics
      questions: questions
      answers: answers

    @_super store, type, payload

`export default Serializer`
