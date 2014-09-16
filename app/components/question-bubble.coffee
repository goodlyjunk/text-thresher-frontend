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
    element.css('top', location.pageY + 7)
    element.css('left', location.pageX + 7)
  ).on('didInsertElement')

  actions:
    clickChoice: (choice) ->
      @get('annotator').acceptChoice(choice, this)

    selectChoice: ->
      select = $(this.get('element')).children('select')[0]
      optionId = $(select).children('option').filter(':selected')[0].value
      answer = @get('bubbleContent.question.answers.content').filterBy('id', optionId)[0]
      @get('annotator').acceptChoice(answer, this)

    submitText: ->
      text = $('#question_bubble_textarea').val()
      @get('annotator').acceptChoice(text, this)

`export default Component;`

# remaining types: cl, tm