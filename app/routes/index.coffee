Route = Ember.Route.extend

  model: ->
    this.store.find('task').then((task)->
      task.get('content')[0]
    )

`export default Route`
