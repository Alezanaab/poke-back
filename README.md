
# PokeBack

This project includes the backend to poke-api

# Prerequisites


node v14.0.0

## Installation

Within the root directory install dependecies by opening the terminal and typing the following 
    
    npm install

Run server:

    npm run start

Unit Tests:

    npm run test


## Documentation


findByName: 

search pokemon by name

http://localhost:3000/api/pokemons/:name

Add one favorite pokemon

http://localhost:3000/api/pokemons/

payload

{
        owner: "owner",
        info: {
          title: "title",
          img: "img",
          weight: "weight",
          height: "height"
        }
}

Get all my favorite pokemos

http://localhost:3000/api/mypokemons/


Delete one favorite


http://localhost:3000/api/mypokemons/:name

payload

{ params: { owner: "owner"} }


Update one favorite



http://localhost:3000/api/mypokemons/:name

payload

 { 
    owner: "owner", 
    weight: "weight", 
    height: "height" 
 }

