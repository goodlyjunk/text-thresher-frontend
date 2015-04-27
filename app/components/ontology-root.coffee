`import Ember from "ember";`

Component = Ember.Component.extend
  classNames: ["ontology-tree__root"]
  shootsVisible: false

  actions:
    toggleShoots: ->
      @toggleProperty('shootsVisible')

`export default Component;`