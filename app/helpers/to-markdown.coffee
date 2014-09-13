Helper = Ember.Handlebars.makeBoundHelper (text)->

  formatedText = markdown.toHTML(text)
  new Handlebars.SafeString formatedText

`export default Helper;`