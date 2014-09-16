QuestionFacade = (topic, question) ->
  @topic = topic
  @question = question
  @text = question.get('text')
  @choices = question.get('choices.content')

  @next = (choice) ->
    topic = this.topic
    nextQuestion = null
    @question.get('dependencies').forEach (item)->
      if item.if == choice.get('id')
        return nextQuestion = topic.get('questions.content').filterBy('id', item.then)[0]
    new QuestionFacade(this.topic, this.question) if nextQuestion != null

`export default QuestionFacade;`