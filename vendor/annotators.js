define(
  function(){

    exports = [];

    QuestionFacade = function(topic, question){
      this.topic = topic,
      this.question = question,
      this.text = question.get('text'),
      this.choices = question.get('choices.content'),

      this.next = function (choice){
        var topic = this.topic;
        var nextQuestion = null;
        this.question.get('dependencies').forEach(function(item){
          if (item.if == choice.get('id')){
            return nextQuestion = topic.get('questions.content').filterBy('id', item.then)[0]
          }
        });
        if (nextQuestion != null){ return new QuestionFacade(this.topic, this.question) }
      }
    }

    exports.push(QuestionFacade);

    TopicsFacade = function(topics){
      this.choices = topics,

      this.next = function (choice){
        question = choice.get('questions.content').filterBy('id', choice.id + ".01")[0];
        return new QuestionFacade(choice, question);
      }
    }

    exports.push(TopicsFacade);

    return exports;

  }

)