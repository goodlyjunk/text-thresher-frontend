`import Ember from "ember";`

Component = Ember.Component.extend
  classNames: ["ontology-tree__branch"]
  shootsVisible: false

  actions:
    toggleShoots: ->
      @toggleProperty('shootsVisible')

`export default Component;`