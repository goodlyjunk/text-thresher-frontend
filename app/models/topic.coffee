Topic = DS.Model.extend
  
  questions: DS.hasMany("question")

  name: DS.attr("string")

  text: (->
    @get('name')
  ).property('name')

  choices: (->
    @get('questions')
  ).property('questions.@each')

  dependencies: (->
    [@get('questions.content').filterBy('id', @id + ".01")[0]]
  ).property("questions")

`export default Topic`