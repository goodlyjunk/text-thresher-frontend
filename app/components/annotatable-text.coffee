`import Ember from "ember";`

Component = Ember.Component.extend

  reduced: true

  HighlightFacade: (highlightGroup, annotatedText) ->
    @highlightGroup = highlightGroup
    @annotatedText = annotatedText
    @formType = "highlight"

    @next = ->
      new @annotatedText.HighlightFacade(@highlightGroup, @annotatedText)
    return

  QuestionFacade: (topic, question, highlightGroup, annotatedText) ->
    @topic = topic
    @question = question
    @formType = question.get('type')
    @text = question.get('text')
    @choices = question.get('choices.content')
    @highlightGroup = highlightGroup
    @annotatedText = annotatedText

    @qa = (choice) ->
      { question: @question, choice: choice }

    @next = (choice) ->
      pendingQuestions = @highlightGroup.get('pendingQuestions')
      pendingQuestions.removeAt(0)
      dependencies = if choice.dependencies then choice.dependencies(@topic, @question) else []
      pendingQuestions.pushObjects(dependencies)
      return new @annotatedText.HighlightFacade(@highlightGroup, @annotatedText) if pendingQuestions.get('content').length == 0
      nextQuestion = pendingQuestions.get('content')[0]
      new @annotatedText.QuestionFacade(@topic, nextQuestion, @highlightGroup, @annotatedText)
    return

  TopicsFacade: (topics, highlightGroup, annotatedText) ->
    @choices = topics
    @formType = 'mc'
    @highlightGroup = highlightGroup
    @annotatedText = annotatedText

    @qa = (choice) ->
      { choice: choice }

    @next = (choice) ->
      pendingQuestions = @highlightGroup.get('pendingQuestions')
      dependencies = choice.get('dependencies')
      pendingQuestions.pushObjects(dependencies)
      firstQuestion = pendingQuestions.get('content')[0]
      new @annotatedText.QuestionFacade(choice, firstQuestion, @highlightGroup, @annotatedText)
    return

  questionBubbleIsVisible: (->
    @get('bubbleContent')
  ).property('bubbleContent')

  highlightingGroup: (->
    @get('bubbleContent') instanceof @HighlightFacade
  ).property('bubbleContent')

  mouseDown: (event) ->
    location = @createLocationObject(event)
    @set("mouseDownLocation", location)

  mouseUp: (event) ->
    selection = window.getSelection()
    if $(event.target).hasClass('highlight')
      id = event.target.id.split("_")[1]
      @reactivateHighlight(id)
    else if @clickedQuestionBubble(event)
      event.preventDefault()
    else if selection.toString().length > 0 && @get('highlightingGroup')
      highlightGroup = @createHighlight(selection)
      topicFacade = new @HighlightFacade(highlightGroup, this)
      @set('bubbleContent', topicFacade)
    else if selection.toString().length > 0 && !@get('bubbleContent')
      highlightGroup = @createHighlight(selection)
      topicFacade = new @TopicsFacade(@get('task.topics.content'), highlightGroup, this)
      @set('bubbleContent', topicFacade)
    else if @get('questionBubbleIsVisible')
      @disableQuestionBubble()

  reactivateHighlight: (id) ->
    highlightGroup = @get('task.highlightGroups.content').filterBy('id', id)[0]
    @set('highlightGroup', highlightGroup)
    nextQuestion = highlightGroup.get('pendingQuestions.content')[0]
    if nextQuestion
      topic = highlightGroup.get('qa')[0].choice
      facade = new @QuestionFacade(topic, nextQuestion, highlightGroup, this)
    else
      facade = new @HighlightFacade(highlightGroup, this)
    @set('bubbleContent', facade)

  clickedQuestionBubble: (event) ->
    $(event.target).hasClass('question-bubble') || $(event.target).parents().hasClass('question-bubble')

  createHighlight: (selection) ->
    task = @get('task')
    id = task.get('highlightGroups.content.length')
    range = window.getSelection().getRangeAt(0);
    preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents($("#annotatable_text")[0]);
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    startOffset = preCaretRange.toString().replace(/\\n/g, " ").length;
    endOffset = startOffset + range.toString().replace(/\\n/g, " ").length;
    if @get('highlightingGroup')
      highlightGroup = @get('bubbleContent').highlightGroup
    else
      highlightGroup = task.store.createRecord('highlight-group',
        qa: Ember.A()
        complete: false
        id: id
      )
    highlight = task.store.createRecord('highlight',
      start: startOffset
      stop: endOffset
      highlightGroup: highlightGroup
    )
    highlightGroup.get('highlights').pushObject(highlight)
    @set('highlightGroup', highlightGroup)
    task.get('highlightGroups').pushObject(highlightGroup)
    highlightGroup

  setLocation: (event) ->
    location = @get('mouseDownLocation')
    location = @createLocationObject(event) if location.pageY < event.pageY
    @set('questionBubbleLocation', location)

  createLocationObject: (event) ->
    { pageX: event.pageX, pageY: event.pageY }

  destroyHighlightGroup: ->
    @get('highlightGroup.highlights.content').forEach (highlight) ->
      highlight.deleteRecord()
    @get('highlightGroup').deleteRecord()

  disableQuestionBubble: ->
    @get('highlightGroup').deleteRecord() if @get('highlightGroup.qa').length == 0
    @set('bubbleContent', null)
    @set('highlightGroup', null)

  acceptChoice: (choice, questionBubble) ->
    @addToQa(choice)
    @getBubbleContent(choice)
    questionBubble.rerender()

  addToQa: (choice) ->
    @get('highlightGroup.qa').push(@get('bubbleContent').qa(choice))
    @get('task').notifyPropertyChange('highlightGroups')

  getBubbleContent: (choice) ->
    newBubbleContent = @get('bubbleContent').next(choice)
    @set('bubbleContent', newBubbleContent)
    if @get('highlightingGroup')
      @get('highlightGroup').markAsComplete()

  formattedText: (->
    text = @get('task.text')
    text = @insertElements(text)
    text.replace(/\n/g, "<span class='breaking-span'>&#92;n</span>")
  ).property('task.text', 'task.highlightGroups.@each', 'reduced')


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
    highlightGroup = index.highlightGroup
    complete = if highlightGroup && highlightGroup.get('complete') then "green-lighted" else "yellow-lighted"
    string = "<span class='highlight #{ complete }' id='highlight_#{ highlightGroup.id }' title='#{ highlightGroup.getTitle() }'>"
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
    highlightGroups = @get('task.highlightGroups')
    indexes = []
    highlightGroups.forEach (highlightGroup) ->
      highlightGroup.get('highlights').forEach (highlight) ->
        startIndex = highlight.get('start')
        endIndex = highlight.get('stop')
        indexes.push { index: startIndex, highlightGroup: highlightGroup, type: "highlight" }
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
    closeTextBubble: ->
      @disableQuestionBubble()


`export default Component;`