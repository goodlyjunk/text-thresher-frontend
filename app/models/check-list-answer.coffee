Model = DS.Model.extend

  question: DS.belongsTo("question")
  selectedAnswers: DS.hasMany("answers")

  text: (->
    answers = @get("selectedAnswers").map (answer) -> answer.get("text")
    answers.join(", ")
  ).property("selectedAnswers.@each")

`export default Model`