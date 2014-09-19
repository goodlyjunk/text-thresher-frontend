Task = DS.Model.extend

  tua: DS.belongsTo("tua")

  highlightGroups: DS.hasMany("highlight-group")
  topics: DS.hasMany("topic")

  text: DS.attr("string")

`export default Task`