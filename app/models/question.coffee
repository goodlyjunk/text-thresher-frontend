Question = DS.Model.extend

  topic: DS.belongsTo("topic")

  answers: DS.hasMany("answer")

  dependencies: DS.attr("array")
  text: DS.attr("string")
  top: DS.attr("boolean")
  type: DS.attr("string")

  choices: (->
    @get('answers')
  ).property('answers.@each')

`export default Question`