`import Ember from "ember";`

Component = Ember.Component.extend

  reduced: true

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
    range = window.getSelection().getRangeAt(0);
    preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents($("#annotatable_text")[0]);
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    startOffset = preCaretRange.toString().replace(/\\n/g, " ").length;
    endOffset = startOffset + range.toString().replace(/\\n/g, " ").length;
    highlight = task.store.createRecord('highlight',
      start: startOffset
      stop: endOffset
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

  formattedText: (->
    text = @get('task.text')
    text = @insertElements(text)
    text.replace(/\n/g, "<span class='breaking-span'>&#92;n</span>")
  ).property('task.text', 'task.highlights.@each', 'reduced')


  insertElements: (text) ->
    _this = this
    @getElementIndexes(text).forEach (index) ->
      text = switch index.type
        when "highlight" then _this.insertHighlight(text, index)
        when "offset" then _this.insertTuaOffset(text, index)
        when "extended-offset" then _this.insertExtendedOffset(text, index)
        else _this.insertEndTag(text, index)
    text

  getElementIndexes: (text) ->
    indexes = @getHighlightIndexes(text)
    indexes = indexes.concat(@getTuaOffsetIndexes(text))
    indexes = indexes.concat(@getExtendedOffsetIndexes(text))
    @sortIndexes(indexes)

  insertHighlight: (text, index) ->
    highlight = index.highlight
    complete = if highlight && highlight.get('complete') then "green-lighted" else "yellow-lighted"
    string = "<span class='highlight #{ complete }' id='highlight_#{ highlight.id }' title='#{ highlight.getTitle() }'>"
    text.slice(0, index.index) + string + text.slice(index.index)

  insertTuaOffset: (text, index) ->
    string = "<span class='offset'>"
    text.slice(0, index.index) + string + text.slice(index.index)

  insertExtendedOffset: (text, index) ->
    string = "<span class='extended-offset'>"
    text.slice(0, index.index) + string + text.slice(index.index)

  insertEndTag: (text, index) ->
    text.slice(0, index.index) + "</span>" + text.slice(index.index)

  getHighlightIndexes: (text) ->
    highlights = @get('task.highlights')
    indexes = []
    highlights.forEach (highlight)->
      startIndex = highlight.get('start')
      endIndex = highlight.get('stop')
      indexes.push { index: startIndex, highlight: highlight, type: "highlight" }
      indexes.push { index: endIndex }
    indexes

  getTuaOffsetIndexes: (text) ->
    offsets = @get('task.tua.offsets')
    indexes = []
    offsets.forEach (offset)->
      startIndex = offset.start
      endIndex = offset.stop
      indexes.push { index: startIndex, type: "offset" }
      indexes.push { index: endIndex }
    indexes

  getExtendedOffsetIndexes: (text) ->
    _this = this
    offsets = @get('task.tua.offsets')
    indexes = []
    offsets.forEach (offset)->
      startIndex = _this.indexByWord(text, offset.start, -15)
      endIndex = _this.indexByWord(text, offset.stop, 15)
      indexes.push { index: startIndex, type: "extended-offset" } if startIndex
      indexes.push { index: endIndex } if endIndex
    indexes

  indexByWord: (text, index, wordCount) ->
    extendedIndex = @getIndexForExtendedOffset(text, index, wordCount)
    if @extendedIndexIsUnconflicting(text, index, extendedIndex, wordCount) then extendedIndex else null

  getIndexForExtendedOffset: (text, index, wordCount) ->
    reverse = @extendedOffsetIsReversed(wordCount)
    substring = if reverse then text.substring(0, index) else text.substring(index)
    words = substring.split(" ")
    words = words.reverse() if reverse
    cursor = 0
    selectedWords = []
    while cursor < Math.abs(wordCount)
      word = words[cursor]
      selectedWords.push(word)
      cursor += 1
    selectedWords = selectedWords.reverse() if reverse
    length = selectedWords.join(" ").length
    if reverse then index - length else index + length

  extendedIndexIsUnconflicting: (text, index, extendedIndex, wordCount) ->
    _this = this
    reverse = @extendedOffsetIsReversed(wordCount)
    offsets = @get('task.tua.offsets')
    conflicting = offsets.forEach (offset)->
      if reverse
        offsetIndex = _this.getIndexForExtendedOffset(text, offset.stop, wordCount)
        return true if offsetIndex < index && offsetIndex > extendedIndex
      else
        offsetIndex = _this.getIndexForExtendedOffset(text, offset.start, wordCount)
        return true if offsetIndex > index && offsetIndex < extendedIndex
    if conflicting then false else true

  extendedOffsetIsReversed: (wordCount) ->
    wordCountAbs = Math.abs(wordCount)
    wordCount != wordCountAbs

  sortIndexes: (indexes) ->
    indexes.sort (a, b) ->
      return 1  if a.index < b.index
      return -1  if a.index > b.index
      0

  actions:
    toggleText: ->
      @toggleProperty('reduced')

`export default Component;`