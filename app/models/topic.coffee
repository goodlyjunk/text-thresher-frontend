Topic = DS.Model.extend
  
  questions: DS.hasMany("question")

  name: DS.attr("string")

  text: (->
    @get('name')
  ).property('name')

  choices: (->
    @get('questions')
  ).property('questions.@each')

`export default Topic`