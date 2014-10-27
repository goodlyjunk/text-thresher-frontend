Route = Ember.Route.extend

  model: ->
    this.store.find('tua', 1)

`export default Route`
