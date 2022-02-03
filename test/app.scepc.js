const asert = require('assert');


const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000/api/';

describe('Use of api of pokemons', () => {

    it('should get a list of pokemons', (done) => {
        chai.request(url)
            .get('/pokemons')
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should retrieve pokemon by name', (done) => {
        chai.request(url)
            .get('pokemons/pikachu')
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should get my favorite  pokemons', (done) => {
        chai.request(url)
            .get('/mypokemons')
            .send({
                owner: "me",
                info: {
                    "title": "pikachu"
                }
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should add a pokemons ', (done) => {
        chai.request(url)
            .post('/pokemons')
            .send({
                owner: "me",
                info: {
                    "title": "pikachu",
                    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
                    "weight": "40",
                    "height": "20",
                }
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should remove a pokemon by name', (done) => {
        chai.request(url)
            .delete('/mypokemons/cyndaquil')
            .query({ owner: "me" })
            .end(function (err, res) {
                console.log(res);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should update a pokemon', (done) => {
        chai.request(url)
            .put('/mypokemons/cyndaquil')
            .query({ owner: "me" })
            .end(function (err, res) {
                console.log(res);
                expect(res).to.have.status(200);
                done();
            });
    });
});