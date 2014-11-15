`import Ember from "ember";`
`import DS from 'ember-data'`

Serializer = DS.RESTSerializer.extend

  extractArray: (store, type, payload) ->
    tuas = payload.results
    analysisTypes = Ember.A()
    topics = Ember.A()
    questions = Ember.A()
    answers = Ember.A()

    tuas.forEach (tua) ->
      analysisTypes.pushObject tua.analysis_type
      tua.analysisType = tua.analysis_type.id
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

    payload =
      tuas: tuas
      analysisTypes: analysisTypes
      topics: topics
      questions: questions
      answers: answers

    @_super store, type, payload

`export default Serializer`
