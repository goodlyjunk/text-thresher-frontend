`import Ember from "ember";`

Component = Ember.Component.extend

  classNames: ["question-bubble"]

  setLocation: (->
    location = @get('location')
    element = $(@get('element'))
    element.css('top', location.pageY + 7)
    element.css('left', location.pageX + 7)
  ).on('didInsertElement')

  actions:
    selectChoice: (choice) ->
      @get('annotator').acceptChoice(choice)

`export default Component;`