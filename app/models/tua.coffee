Tua = DS.Model.extend
  analysisType: DS.belongsTo("analysis-type")
  highlightGroups: DS.hasMany("highlight-group")
  offsets: DS.attr("array")
  text: DS.attr("string")
  nextUrl: DS.attr("string")

`export default Tua`