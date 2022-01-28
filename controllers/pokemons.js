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

  //GET - Return pokemon by Name
  exports.findByName = function (req, res) {
    console.log('pokemon by name');
    console.log(req.params.name);
    fetch('https://pokeapi.co/api/v2/pokemon/'+req.params.name, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
         }
      })
    .then(response => { console.log(response)
        return response.json()})//response.json())
    .then(function(pokeData){
     console.log(pokeData);
     res.send(pokeData).status(500);
     })
     .catch(err => { 
     console.log(err);
     res.send({'status':'not found'}).status(500);
    })
  };
