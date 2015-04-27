`import Ember from "ember";`

Component = Ember.Component.extend
  classNames: ["ontology-tree__root"]
  shootsVisible: true

  actions:
    toggleShoots: ->
      @toggleProperty('shootsVisible')

`export default Component;`