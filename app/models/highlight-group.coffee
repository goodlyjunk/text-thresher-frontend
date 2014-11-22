Model = DS.Model.extend
  
  tua: DS.belongsTo("tua")

  highlights: DS.hasMany("highlight")
  pendingQuestions: DS.hasMany("question")

  complete: DS.attr("boolean")
  qa: Ember.A()

  rewind: ->
    qa = @get('qa')
    lastQuestion = qa.popObject()
    if lastQuestion.question
      rejects = @get('pendingQuestions').reject (question) ->
        keep = true
        lastQuestion.question.get('dependencies').forEach (dependency) ->
          keep = false if dependency[1] == question.id
        return keep
      @get('pendingQuestions').removeObjects(rejects)
    @get('pendingQuestions').insertAt(0, lastQuestion.question) if lastQuestion.question
    qa.removeObject(lastQuestion)

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