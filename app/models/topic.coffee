Topic = DS.Model.extend
  
  analysisType: DS.belongsTo("analysis-type")
  questions: DS.hasMany("question")

  name: DS.attr("string")
  topicId: DS.attr("string")

  text: (->
    @get('name')
  ).property('name')

  choices: (->
    @get('questions')
  ).property('questions.@each')

  dependencies: (->
    [@get('questions.content').filterBy('questionId', parseInt(@get('topicId') + ".01"), 10)[0]]
  ).property("questions")

  ontologicalDependencies: (->
    @get('dependencies')
  ).property('dependencies')

`export default Topic`