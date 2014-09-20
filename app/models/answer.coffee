Answer = DS.Model.extend

  question: DS.belongsTo("question")
  
  text: DS.attr("string")

  dependencies: (topic, question) ->
    _this = this
    dependencies = []
    questionDependencies = question.get("dependencies")
    if questionDependencies
      questionDependencies.forEach (dependency)->
        if dependency.if == _this.get('id')
          newQuestion = topic.get('questions.content').filterBy('id', dependency.then)[0]
          dependencies.push(newQuestion)
    dependencies

`export default Answer`