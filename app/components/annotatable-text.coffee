`import Ember from "ember";`

Component = Ember.Component.extend

  init: ->
    topicsFacade = new @TopicsFacade(@get('tua.analysisType.topics.canonicalState'), this)
    @set('bubbleContent', topicsFacade)
    this._super()

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
    @choices = question.get('choices.currentState')
    @highlightGroup = highlightGroup
    @annotatedText = annotatedText

    @qa = (choice) ->
      { question: @question, choice: choice }

    @next = (choice) ->
      pendingQuestions = @highlightGroup.get('pendingQuestions')
      pendingQuestions.removeAt(0)
      dependencies = if choice.dependencies then choice.dependencies(@topic, @question) else []
      pendingQuestions.pushObjects(dependencies)
      return new @annotatedText.HighlightFacade(@highlightGroup, @annotatedText) if pendingQuestions.get('currentState').length == 0
      nextQuestion = pendingQuestions.get('currentState')[0]
      new @annotatedText.QuestionFacade(@topic, nextQuestion, @highlightGroup, @annotatedText)
    return

  TopicsFacade: (topics, annotatedText, highlightGroup) ->
    @choices = topics
    @formType = 'topic'
    @annotatedText = annotatedText
    @highlightGroup = highlightGroup

    @qa = (choice) ->
      { choice: choice }

    @next = (choice) ->
      pendingQuestions = @highlightGroup.get('pendingQuestions')
      dependencies = choice.get('dependencies')
      pendingQuestions.pushObjects(dependencies)
      firstQuestion = pendingQuestions.currentState[0]
      new @annotatedText.QuestionFacade(choice, firstQuestion, @highlightGroup, @annotatedText)
    return

  questionBubbleIsVisible: (->
    !(@get('bubbleContent') instanceof @TopicsFacade)
  ).property('bubbleContent')

  highlightingGroup: (->
    @get('bubbleContent') instanceof @HighlightFacade
  ).property('bubbleContent')

  tua: (->
    contentTua = @get('tuas.content.content')
    if contentTua
      @get('tuas.content.content')[0]
    else
      @get('tuas')[0]
  ).property('tuas')

  topics: (->
    @get('tua.analysisType.topics')
  ).property('tua')

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
      highlightFacade = new @HighlightFacade(highlightGroup, this)
      @set('bubbleContent', highlightFacade)
    else if selection.toString().length > 0 && !@get('questionBubbleIsVisible')
      highlightGroup = @createHighlight(selection)
      @activateTopicsMenu(highlightGroup)
    else if !$(event.target).hasClass('text-toggle')
      @disableQuestionBubble()

  reactivateHighlight: (id) ->
    highlightGroup = @get('tua.highlightGroups.currentState').filterBy('id', id)[0]
    @set('highlightGroup', highlightGroup)
    nextQuestion = highlightGroup.get('pendingQuestions.currentState')[0]
    if nextQuestion
      topic = highlightGroup.get('qa')[0].choice
      facade = new @QuestionFacade(topic, nextQuestion, highlightGroup, this)
    else
      facade = new @HighlightFacade(highlightGroup, this)
    @set('bubbleContent', facade)
    @rerender()

  clickedQuestionBubble: (event) ->
    $(event.target).hasClass('question-bubble') || $(event.target).parents().hasClass('question-bubble')

  activateTopicsMenu: (highlightGroup) ->
    topicsFacade = @get('bubbleContent')
    topicsFacade.highlightGroup = highlightGroup
    @rerender()

  initializeTopicsMenu: (highlightGroup) ->
    topicsFacade = new @TopicsFacade(@get('tua.analysisType.topics.canonicalState'), this, highlightGroup)
    @set('bubbleContent', topicsFacade)
    @rerender()

  createHighlight: (selection) ->
    tua = @get('tua')
    id = tua.store.all('highlightGroup').content.length
    range = window.getSelection().getRangeAt(0);
    preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents($("#annotatable_text")[0]);
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    startOffset = preCaretRange.toString().replace(/\\n/g, " ").length;
    endOffset = startOffset + range.toString().replace(/\\n/g, " ").length;
    if @get('highlightingGroup')
      highlightGroup = @get('bubbleContent').highlightGroup
    else
      highlightGroup = tua.store.createRecord('highlight-group',
        qa: Ember.A()
        complete: false
        id: id
      )
    highlight = tua.store.createRecord('highlight',
      start: startOffset
      stop: endOffset
      highlightGroup: highlightGroup
    )
    highlightGroup.get('highlights').pushObject(highlight)
    @set('highlightGroup', highlightGroup)
    tua.get('highlightGroups').pushObject(highlightGroup)
    highlightGroup

  setLocation: (event) ->
    location = @get('mouseDownLocation')
    location = @createLocationObject(event) if location.pageY < event.pageY
    @set('questionBubbleLocation', location)

  createLocationObject: (event) ->
    { pageX: event.pageX, pageY: event.pageY }

  destroyHighlightGroup: ->
    @get('highlightGroup.highlights').forEach (highlight) ->
      highlight.deleteRecord()
    @get('highlightGroup').deleteRecord()

  disableQuestionBubble: (questionBubble) ->
    highlightGroupQA = @get('highlightGroup.qa')
    @get('highlightGroup').deleteRecord() if highlightGroupQA && highlightGroupQA.length == 0
    @set('highlightGroup', null)
    @initializeTopicsMenu()
    questionBubble.rerender() if questionBubble

  acceptChoice: (choice, questionBubble) ->
    @addToQa(choice)
    @getBubbleContent(choice)
    questionBubble.rerender()

  addToQa: (choice) ->
    @get('highlightGroup.qa').push(@get('bubbleContent').qa(choice))
    @get('tua').notifyPropertyChange('highlightGroups')

  getBubbleContent: (choice) ->
    newBubbleContent = @get('bubbleContent').next(choice)
    @set('bubbleContent', newBubbleContent)
    if @get('highlightingGroup')
      @get('highlightGroup').markAsComplete()

  formattedText: (->
    text = @get('tua.text')
    text = @insertElements(text)
    text.replace(/\n/g, "<span class='breaking-span'>&#92;n</span>")
  ).property('tua.text', 'tua.highlightGroups.@each.highlights', 'reduced')


  insertElements: (text) ->
    _this = this
    previousIndex = null
    @getElementIndexes(text).forEach (index) ->
      text = switch index.type
        when "highlight" then _this.insertHighlight(text, index, previousIndex)
        when "offset" then _this.insertTuaOffset(text, index, previousIndex)
        when "extended-offset" then _this.insertExtendedOffset(text, index, previousIndex)
        else _this.insertEndTag(text, index, previousIndex)
      previousIndex = index
    text

  getElementIndexes: (text) ->
    indexes = @getHighlightIndexes(text)
    indexes = indexes.concat(@getTuaOffsetIndexes(text))
    indexes = indexes.concat(@getExtendedOffsetIndexes(text))
    @sortIndexes(indexes)

  highlightTag: (highlightGroup) ->
    complete = if highlightGroup && highlightGroup.get('complete') then "green-lighted" else "yellow-lighted"
    "<span class='highlight #{ complete }' id='highlight_#{ highlightGroup.id }' title='#{ highlightGroup.getTitle() }'>"

  wrapHighlightTags: (string, index, previousIndex) ->
    return string unless previousIndex && (!index.highlightGroup || index.highlightGroup != previousIndex.highlightGroup) && !previousIndex.type && previousIndex.highlightGroup
    "</span>" + string + @highlightTag(previousIndex.highlightGroup)

  insertHighlight: (text, index, previousIndex) ->
    string = @highlightTag(index.highlightGroup)
    string = @wrapHighlightTags(string, index, previousIndex)
    text.slice(0, index.index) + string + text.slice(index.index)

  insertTuaOffset: (text, index, previousIndex) ->
    string = "<span class='offset'>"
    string = @wrapHighlightTags(string, index, previousIndex)
    text.slice(0, index.index) + string + text.slice(index.index)

  insertExtendedOffset: (text, index, previousIndex) ->
    string = "<span class='extended-offset'>"
    string = @wrapHighlightTags(string, index, previousIndex)
    text.slice(0, index.index) + string + text.slice(index.index)

  insertEndTag: (text, index, previousIndex) ->
    string = "</span>"
    string = @wrapHighlightTags(string, index, previousIndex)
    text.slice(0, index.index) + string + text.slice(index.index)

  getHighlightIndexes: (text) ->
    highlightGroups = @get('tua.highlightGroups')
    indexes = []
    highlightGroups.forEach (highlightGroup) ->
      highlightGroup.get('highlights').forEach (highlight) ->
        startIndex = highlight.get('start')
        endIndex = highlight.get('stop')
        indexes.push { index: startIndex, highlightGroup: highlightGroup, type: "highlight" }
        indexes.push { index: endIndex, highlightGroup: highlightGroup }
    indexes

  getTuaOffsetIndexes: (text) ->
    offsets = @get('tua.offsets')
    indexes = []
    offsets.forEach (offset)->
      startIndex = offset[0]
      endIndex = offset[1]
      indexes.push { index: startIndex, type: "offset" }
      indexes.push { index: endIndex }
    indexes

  getExtendedOffsetIndexes: (text) ->
    _this = this
    offsets = @get('tua.offsets')
    indexes = []
    offsets.forEach (offset)->
      startIndex = _this.indexByWord(text, offset[0], -15)
      endIndex = _this.indexByWord(text, offset[1], 15)
      startIndex = 0 if startIndex < 0
      endIndex = text.length - 1 if endIndex > text.length - 1
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
    offsets = @get('tua.offsets')
    conflicting = offsets.forEach (offset)->
      if reverse
        offsetIndex = _this.getIndexForExtendedOffset(text, offset[1], wordCount)
        return true if offsetIndex < index && offsetIndex > extendedIndex
      else
        offsetIndex = _this.getIndexForExtendedOffset(text, offset[0], wordCount)
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