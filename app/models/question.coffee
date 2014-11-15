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

  dependencies: (->
    id = this.id.toString()
    @get('topic.analysisType.questionDependencies').filter( (dependency) ->
      dependency[0].split(".").slice(0, 2).join(".") == id
    )
  ).property('topic.analysisType.questionDependencies')

  ontologicalDependencies: (->
    output = []
    store = @store
    @get('dependencies').forEach (dependency) ->
      unique = true
      output.forEach (outputDependency) ->
        unique = false if dependency[1] == outputDependency[1]
      output.push(dependency) if unique
    output.map (dependency) -> store.find('question', dependency[1])
  ).property('dependencies')

`export default Question`