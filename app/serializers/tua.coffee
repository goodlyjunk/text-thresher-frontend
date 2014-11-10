`import DS from 'ember-data'`

TuaSerializer = DS.RESTSerializer.extend
  extractArray: (store, type, payload) ->
    tuas = payload.results
    payload =
      tuas: tuas
    @_super store, type, payload

  # serialize: (tua) ->
  #   console.log tua
  #   json = @_super(tua)
  #   console.log json
  #   # json = {}
  #   # json

`export default TuaSerializer`
