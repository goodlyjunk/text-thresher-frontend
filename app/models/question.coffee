Question = DS.Model.extend

  topic: DS.belongsTo("topic")

  answers: DS.hasMany("answer",
    embedded: 'always'
  )
  textAnswer: DS.belongsTo("text-answer")
  checkListAnswer: DS.belongsTo("check-list-answer")
  timeAnswer: DS.belongsTo("time-answer")

  dependencies: DS.attr("array")
  text: DS.attr("string")
  top: DS.attr("boolean")
  type: DS.attr("string")

  choices: (->
    @get('answers')
  ).property('answers.@each')

`export default Question`