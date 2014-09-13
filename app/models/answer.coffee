Answer = DS.Model.extend

  question: DS.belongsTo("question")
  
  text: DS.attr("string")

`export default Answer`