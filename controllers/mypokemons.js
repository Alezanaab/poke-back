//File: controllers/mypokemons.js
var mongoose = require("mongoose");
var Pokemon = mongoose.model("Pokemon");

//GET - Return all tvshows in the DB
exports.findAll = function (req, res) {
  Pokemon.find(function (err, pokemons) {
    if (err) res.send(500, err.message);

    console.log("GET /mypokemons");
    res.status(200).jsonp(pokemons);
  });
};

