`import Ember from "ember";`

Component = Ember.Component.extend
  classNames: ['ontology-tree']

  visible: true

  actions:
    toggleVisibility: ->
      @toggleProperty('visible')

`export default Component;`