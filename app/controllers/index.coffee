`import Ember from "ember";`

Controller = Ember.Controller.extend

  topics: (->
    @get('content.content')[8].get('analysisType.topics')
  ).property('analysisType.topics')


`export default Controller`