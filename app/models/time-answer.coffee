Model = DS.Model.extend

  question: DS.belongsTo("question")

  time: DS.attr("date")

  text: (->
    @get("time").toString()
  ).property("time")

`export default Model`