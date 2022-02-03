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

//DELETE - Delete a Fav pokemon with specified ID
exports.deleteFavPokemon = function (req, res) {
  console.log("DEL /mypokemons/:name");
  console.log("req,", req.query.owner);
  console.log("req,", req.params.name);
  Pokemon.findOne({ "owner": req.query.owner, "info.title": req.params.name }, function (err, pokemon) {
    console.log(pokemon);
    pokemon.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};

exports.updateFavPokemon = function (req, res) {
  console.log("UPdate /mypokemons/:name");
  console.log("req,", req.query);
  console.log("req,", req.body.item.weight);
  console.log("req,", req.body.item.height);
  Pokemon.findOneAndUpdate({ "owner": req.body.item.owner, "info.title": req.params.name },
    {
      $set: { "info.weight": req.body.item.weight, "info.height": req.body.item.height }
    },
      function(err, pokemon) {
        console.log(pokemon);
        pokemon.save(function (err) {
          if (err) return res.status(500).send(err.message);
          res.status(200).send();
        });
      });
};