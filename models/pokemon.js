exports = module.exports = function(app, mongoose) {

	var pokemonSchema = new mongoose.Schema({
		owner: 		{ type: String },
		info: 		{ type: String }
	});

	mongoose.model('Pokemon', pokemonSchema);

};