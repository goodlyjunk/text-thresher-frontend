`import Ember from "ember";`

Component = Ember.Component.extend

  questionBubbleIsVisible: (->
    @get('highlight')
  ).property('highlight')

  mouseDown: (event) ->
    location = @createLocationObject(event)
    @set("mouseDownLocation", location)

  mouseUp: (event) ->
    selection = window.getSelection()
    if selection.toString().length > 0 && !@get('highlight')
      @createHighlight(selection)
      @set('question', null)
      @set('choices', @get('task.topics.content'))
      @setLocation(event)

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
    @set('highlight', null)

  acceptChoice: (choice) ->
    @addToQa(choice)
    @setNextQuestion(choice)
    @popBubble() if @get('highlight') == null

  setNextQuestion: (choice) ->
    _this = this
    question = null
    dependencies = @get('question.dependencies')
    if dependencies
      @get('question.dependencies').forEach (item)->
        if item.if == choice.get('id')
          return question = _this.get('topic.questions.content').filterBy('id', item.then)[0]
    else
      @set('topic', choice)
      question = choice.get('questions.content').filterBy('id', choice.id + ".01")[0]
    if question == null
      @get('highlight').markAsComplete()
      @disableQuestionBubble()
    @set('question', question)
    @set('choices', question.get('choices.content')) if question

  addToQa: (answer) ->
    @get('highlight.qa').push({ question: @get('question.text'), answer: answer.get('text')})
    @get('task').notifyPropertyChange('highlights')

  formattedText: (->
    text = @get('task.text')
    text = @insertHighlights(text)
    text.replace(/\n/g, "<br/>")
  ).property('task.text', 'task.highlights.@each')

  insertHighlights: (text) ->
    @getHighlightIndexes(text).forEach (index) ->
      highlight = index.highlight
      complete = if highlight && highlight.get('complete') then "green-lighted" else "yellow-lighted"
      string = if index.start then "<span class=#{ complete } id='highlight_#{ highlight.id }' title='#{ highlight.getTitle() }'>" else "</span>"
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