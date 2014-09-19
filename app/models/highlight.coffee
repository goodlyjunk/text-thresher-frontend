Model = DS.Model.extend
  
  highlightGroup: DS.belongsTo("highlight-group")

  start: DS.attr("number")
  stop: DS.attr("stop")

`export default Model`