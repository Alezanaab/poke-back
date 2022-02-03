//File: controllers/pokemons.js
var mongoose = require("mongoose");
var fetch = require("node-fetch");

var Pokemon = mongoose.model("Pokemon");

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
  fetch('https://pokeapi.co/api/v2/pokemon/' + req.params.name, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(response => {
      console.log(response)
      return response.json()
    })//response.json())
    .then(function (pokeData) {
      console.log(pokeData);
      res.send(pokeData).status(200);
    })
    .catch(err => {
      console.log(err);
      res.send({ 'status': 'not found' }).status(500);
    })
};


/*POST - Insert a new TVShow in the DB
exports.addFavPokemon = function (req, res) {
console.log("POST");
console.log(req.body);

var pokemon = new Pokemon({
  owner: req.body.owner,
  info: req.body.info,
});

console.log('pok', pokemon);

pokemon.save(function (err, pokemon) {
  if (err) return res.status(500).send(err.message);
  res.status(200).jsonp(pokemon);
});
};
*/
//POST - Insert a new pokemon in the DB
exports.addFavPokemon = function (req, res) {
  console.log("POST");
  console.log(req.body);

  Pokemon.findOneAndUpdate({ "owner": req.body.owner, "info.title": req.body.info.title },
    {
      $set: {
        owner: req.body.owner,
        info: {
          title: req.body.info.title,
          img: req.body.info.img,
          weight: req.body.info.weight,
          height: req.body.info.height
        }
      }
    },
    {
      new: true,
      upsert: true
    },
    function (err, pokemon) {
      console.log('aaay', pokemon);
      pokemon.save(function (err) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(pokemon);
      });
    });

};