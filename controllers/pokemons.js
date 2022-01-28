//File: controllers/pokemons.js
var mongoose = require("mongoose");
var fetch = require("node-fetch");

//GET - Return 50 pokemons
exports.findAll = function (req, res) {
    console.log('test');
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(res => res.json())
    .then(allpokemon => res.status(200).json(allpokemon));
  };

  exports.findByName = function (req, res) {
    console.log('pokemon by name');
    console.log(req.params.name);
    fetch('https://pokeapi.co/api/v2/pokemon/'+req.params.name)
    .then(pokemon => { 
        console.log(pokemon);
        pokemon.size == 0 ? res.status(500).json({'status':'not found'}) : res.status(200).json(pokemon)})
    .then(pokemon => { console.log(pokemon)});
  };
