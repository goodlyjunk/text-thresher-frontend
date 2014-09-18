`import Ember from "ember";`

Component = Ember.Component.extend

  QuestionFacade: (topic, question, annotatedText) ->
    @topic = topic
    @question = question
    @formType = question.get('type')
    @text = question.get('text')
    @choices = question.get('choices.content')
    @annotatedText = annotatedText

    @qa = (choice) ->
      { question: @question, choice: choice }

    @next = (choice) ->
      _this = this
      nextQuestion = null
      @question.get('dependencies').forEach (item)->
        if item.if == choice.get('id')
          return nextQuestion = _this.topic.get('questions.content').filterBy('id', item.then)[0]
      new @annotatedText.QuestionFacade(@topic, nextQuestion, @annotatedText) if nextQuestion != null
    return

  TopicsFacade: (topics, annotatedText) ->
    @choices = topics
    @formType = 'mc'
    @annotatedText = annotatedText

    @qa = (choice) ->
      { choice: choice }

    @next = (choice) ->
      question = choice.get('questions.content').filterBy('id', choice.id + ".01")[0]
      new @annotatedText.QuestionFacade(choice, question, @annotatedText)
    return

  questionBubbleIsVisible: (->
    @get('bubbleContent')
  ).property('bubbleContent')

  mouseDown: (event) ->
    location = @createLocationObject(event)
    @set("mouseDownLocation", location)

  mouseUp: (event) ->
    selection = window.getSelection()
    if $(event.target).hasClass('highlight')
      id = event.target.id.split("_")[1]
      @reactivateHighlight(id)
      @setLocation(event)
    else if @clickedQuestionBubble(event)
      nar = "whale"
    else if selection.toString().length > 0 && !@get('bubbleContent')
      @createHighlight(selection)
      topicFacade = new @TopicsFacade(@get('task.topics.content'), this)
      @set('bubbleContent', topicFacade)
      @setLocation(event)
    else if @get('bubbleContent')
      @disableQuestionBubble()

  reactivateHighlight: (id) ->
    highlight = @get('task.highlights.content').filterBy('id', id)[0]
    @set('highlight', highlight)
    qa = highlight.get('qa')
    topic = qa[0].choice
    lastQA = highlight.get('qa')[..].pop()
    if qa.length > 1
      facade = new @QuestionFacade(topic, lastQA.question, this).next(lastQA.choice)
    else
      facade = new @TopicsFacade(@get('task.topics.content'), this).next(lastQA.choice)
    @set('bubbleContent', facade)

  clickedQuestionBubble: (event) ->
    $(event.target).hasClass('question-bubble') || $(event.target).parents().hasClass('question-bubble')

  createHighlight: (selection) ->
    task = @get('task')
    id = task.get('highlights.content.length')
    highlight = task.store.createRecord('highlight',
      text: selection.toString()
      qa: Ember.A()
      complete: false
      id: id
    )
    @set('highlight', highlight)
    task.get('highlights').pushObject(highlight)

  setLocation: (event) ->
    location = @get('mouseDownLocation')
    location = @createLocationObject(event) if location.pageY < event.pageY
    @set('questionBubbleLocation', location)

  createLocationObject: (event) ->
    { pageX: event.pageX, pageY: event.pageY }

  disableQuestionBubble: ->
    @get('highlight').deleteRecord() if @get('highlight.qa').length == 0
    @set('bubbleContent', null)
    @set('highlight', null)

  acceptChoice: (choice, questionBubble) ->
    @addToQa(choice)
    @getBubbleContent(choice)
    questionBubble.rerender()

  addToQa: (choice) ->
    @get('highlight.qa').push(@get('bubbleContent').qa(choice))
    @get('task').notifyPropertyChange('highlights')

  getBubbleContent: (choice) ->
    newBubbleContent = @get('bubbleContent').next(choice)
    @set('bubbleContent', newBubbleContent)
    if !newBubbleContent
      @get('highlight').markAsComplete()
      @disableQuestionBubble()

  formattedText: (->
    text = @get('task.text')
    text = @insertHighlights(text)
    text.replace(/\n/g, "<br/>")
  ).property('task.text', 'task.highlights.@each')

  insertHighlights: (text) ->
    @getHighlightIndexes(text).forEach (index) ->
      highlight = index.highlight
      complete = if highlight && highlight.get('complete') then "green-lighted" else "yellow-lighted"
      string = if index.start then "<span class='highlight #{ complete }' id='highlight_#{ highlight.id }' title='#{ highlight.getTitle() }'>" else "</span>"
      text = text.slice(0, index.index) + string + text.slice(index.index)
    text

  getHighlightIndexes: (text) ->
    highlights = @get('task.highlights')
    indexes = []
    highlights.forEach (highlight)->
      highlightText = highlight.get('text')
      startIndex = text.indexOf(highlightText)
      endIndex = startIndex + highlightText.length
      indexes.push { index: startIndex, start: true, highlight: highlight }
      indexes.push { index: endIndex, start: false }
    @sortIndexes(indexes)

  sortIndexes: (indexes) ->
    indexes.sort (a, b) ->
      return 1  if a.index < b.index
      return -1  if a.index > b.index
      0

`export default Component;`