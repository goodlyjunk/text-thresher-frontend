`import DS from "ember-data";`

Transform = DS.Transform.extend
  deserialize: (value) ->
    value

`export default Transform`