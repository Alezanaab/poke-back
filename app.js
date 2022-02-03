var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require('mongoose');
var cors = require('cors')

// Connection to DB
mongoose.connect('mongodb://localhost:27017/tvshows', function (err, res) {
  if (err) throw err;
  console.log('Connected to Database');
});

/* Connection to DB
mongoose.connect('mongodb://localhost:27017/pokemons', function(err, res) {
  if(err) throw err;
  console.log('Connected to Poke Database');
}); */

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.json());
app.use(cors());

// Import Models and controllers
var pokemonModel = require('./models/pokemon')(app, mongoose);



var PokemonCtrl = require('./controllers/pokemons');
var MyPokemonsCtrl = require('./controllers/mypokemons');

// Example Route
var router = express.Router();
router.get('/', function (req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var pokemons = express.Router();
var mypokemons = express.Router();



pokemons.route('/pokemons')
  .get(PokemonCtrl.findAll)
  .post(PokemonCtrl.addFavPokemon);

pokemons.route('/pokemons/:name')
  .get(PokemonCtrl.findByName);

mypokemons.route('/mypokemons')
  .get(MyPokemonsCtrl.findAll);

mypokemons.route('/mypokemons/:name')
  .put(MyPokemonsCtrl.updateFavPokemon)
  .delete(MyPokemonsCtrl.deleteFavPokemon);





app.use('/api', pokemons);
app.use('/api', mypokemons);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});