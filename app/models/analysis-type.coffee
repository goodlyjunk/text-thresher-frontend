Model = DS.Model.extend

	topics: DS.hasMany("topic")
	tua: DS.belongsTo("tua")
	
	instructions: DS.attr("string")
	name: DS.attr("string")
	questionDependencies: DS.attr("array")

`export default Model`