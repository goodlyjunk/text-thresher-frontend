`import Ember from "ember";`

Component = Ember.Component.extend

  visible: true

  actions:
    toggleVisibility: ->
      console.log('hey')
      @toggleProperty('visible')

`export default Component;`