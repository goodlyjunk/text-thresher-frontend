Question = DS.Model.extend

  topic: DS.belongsTo("topic")

  answers: DS.hasMany("answer",
    embedded: 'always'
  )
  textAnswer: DS.belongsTo("text-answer")
  checkListAnswer: DS.belongsTo("check-list-answer")
  timeAnswer: DS.belongsTo("time-answer")

  text: DS.attr("string")
  top: DS.attr("boolean")
  type: DS.attr("string")

  choices: (->
    @get('answers')
  ).property('answers.@each')

  ontologicalDependencies: (->
    output = []
    store = @store
    @get('dependencies').forEach (dependency) ->
      unique = true
      output.forEach (outputDependency) ->
        unique = false if dependency.then == outputDependency.then
      output.push(dependency) if unique
    output.map (dependency) -> store.find('question', dependency.then)
  ).property('topic.analysisType.dependencies')

`export default Question`