Task = DS.Model.extend

  tua: DS.belongsTo("tua")

  highlights: DS.hasMany("highlight")
  topics: DS.hasMany("topic")

  text: DS.attr("string")

  textDigests: (->
    offsets = @get('tua.offsets')
    text = @get('text')
    offsets.map (offset) -> text.substring(offset.start - 50, offset.stop + 50)
  ).property('text', 'tua.offsets')

`export default Task`