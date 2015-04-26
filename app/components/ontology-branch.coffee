`import Ember from "ember";`

Component = Ember.Component.extend
  classNames: ["ontology-tree__branch"]
  shootsVisible: true

  actions:
    toggleShoots: ->
      console.log('shoots')
      # @toggleProperty('shootsVisible')

`export default Component;`