Model = DS.Model.extend
  
  task: DS.belongsTo("task")

  complete: DS.attr("boolean")
  text: DS.attr("string")
  qa: Ember.A()

  markAsComplete: ->
    @set('complete', true)

  getTitle: ->
    title = ""
    @get('qa').forEach (element) ->
      if element.question
        title += "Q: #{ element.question } A: #{ element.answer }; "
      else
        title += "#{ element.answer }:: "
    title

`export default Model`