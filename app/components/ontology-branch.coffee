`import Ember from "ember";`

Component = Ember.Component.extend
  shootsVisible: true

  actions:
    toggleShoots: ->
      @toggleProperty('shootsVisible')

`export default Component;`