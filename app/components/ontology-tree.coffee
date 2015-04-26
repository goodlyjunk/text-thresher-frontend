`import Ember from "ember";`

Component = Ember.Component.extend

  visible: true

  actions:
    toggleVisibility: ->
      console.log(@)
      @toggleProperty('visible')

`export default Component;`