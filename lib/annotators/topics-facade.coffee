`import QuestionFacade from 'annotators';`

TopicsFacade = (topics) ->
  @choices = topics

  @next = (choice) ->
    question = choice.get('questions.content').filterBy('id', choice.id + ".01")[0]
    new QuestionFacade(choice, question)

`export default TopicsFacade;`