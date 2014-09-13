Task = DS.Model.extend

  tua: DS.belongsTo("tua")

  highlights: DS.hasMany("highlight")
  topics: DS.hasMany("topic")

  text: DS.attr("string")

`export default Task`