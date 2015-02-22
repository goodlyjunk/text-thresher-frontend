`import Ember from "ember";`

Component = Ember.Component.extend

  layoutNameBinding: 'formType'

  classNames: ["question-bubble"]

  formType: (->
    formType = @get('bubbleContent.formType')
    "components/question-bubble/#{ formType }" if formType
  ).property('bubbleContent.formType')

  setLocation: (->
    location = @get('location')
    element = $(@get('element'))
  ).on('didInsertElement')

  actions:
    rewind: ->
      highlightGroup = @get('bubbleContent.highlightGroup')
      highlightGroup.rewind()
      if highlightGroup.get('pendingQuestions.currentState').length > 0
        @get('annotator').reactivateHighlight(highlightGroup.id)
      else
        @get('annotator').openTopicsMenu(highlightGroup)
      @rerender()

    clickChoice: (choice) ->
      @get('annotator').acceptChoice(choice, this)

    selectChoice: ->
      select = $(this.get('element')).children('select')[0]
      optionId = $(select).children('option').filter(':selected')[0].value
      answer = @get('bubbleContent.question.answers.currentState').filterBy('id', optionId)[0]
      @get('annotator').acceptChoice(answer, this)

    submitText: ->
      text = $('#question_bubble_textarea').val()
      textAnswer = @get('bubbleContent.question').store.createRecord('text-answer', {text: text})
      @get('annotator').acceptChoice(textAnswer, this)

    submitTime: ->
      time = $('#question_bubble_time_input').val()
      timeAnswer = @get('bubbleContent.question').store.createRecord('time-answer', {time: time})
      @get('annotator').acceptChoice(timeAnswer, this)

    submitCheckList: ->
      checkedItems = $('#question_bubble_check_list').children('li').children('input').filter(':checked')
      checkListAnswer = @get('bubbleContent.question').store.createRecord('check-list-answer')
      answers = @get('bubbleContent.question.answers.currentState')
      $(checkedItems).each ->
        answer = answers.filterBy('id', this.value)[0]
        checkListAnswer.get('selectedAnswers').pushObject(answer)
      @get('annotator').acceptChoice(checkListAnswer, this)

    done: ->
      @get('annotator').disableQuestionBubble()

    cancel: ->
      @get('annotator').destroyHighlightGroup()
      @get('annotator').disableQuestionBubble()

`export default Component;`