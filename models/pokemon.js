exports = module.exports = function(app, mongoose) {

	var infoSchema = new mongoose.Schema({
		title : { type: String },
		img : { type: String },
		weight: { type: String },
		height:{ type: String }
	});

	var pokemonSchema = new mongoose.Schema({
		owner: 		{ type: String },
		info: 		infoSchema
	});

	mongoose.model('Pokemon', pokemonSchema);

};