`import Ember from "ember";`

Component = Ember.Component.extend

  visible: true

  actions:
    toggleVisibility: ->
      @toggleProperty('visible')

`export default Component;`