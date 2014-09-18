Model = DS.Model.extend
  
  task: DS.belongsTo("task")

  complete: DS.attr("boolean")
  start: DS.attr("number")
  stop: DS.attr("stop")
  qa: Ember.A()

  markAsComplete: ->
    @set('complete', true)

  getTitle: ->
    title = ""
    @get('qa').forEach (element) ->
      if element.question
        title += "Q: #{ element.question.get('text') } A: #{ element.choice.get('text') }; "
      else
        title += "#{ element.choice.get('text') }:: "
    title

`export default Model`