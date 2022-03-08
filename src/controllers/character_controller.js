import models from '../models/index.js'
import axios from "axios"
import BaseController from './base.js'

export default class CharacterController extends BaseController {
  CharacterController() { }

  async index(req, res) {

    /*if ( req.params.N > 20) {
      console.log("Haré Fetch hasta la página " + Math.ceil(req.params.N/20))
    }
    else {
      console.log("Sólo busco la página 1")
    }*/

    var characters = []
    var page = 1

    while (page <= Math.ceil(req.params.N / 20)) {

      var config = {
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/?page=${page}`,
        headers: {}
      };

      await axios(config)
        .then(response => {
          characters = [...characters, ...response.data.results]
        })
        .catch(error => {
          console.log(error);
        });

      page++

    }

    const charsToReturn = characters.filter((character) => character.id <= req.params.N)

    const reducedChars = []

    charsToReturn.forEach((character) => reducedChars.push({ name: character.name, status: character.status, species: character.species, origin: character.origin.name }))
  
    return super.Success(res, reducedChars)

  }

  async create(req, res) {
    return super.Success(res, '')
  }

  async show(req, res) {
    return super.Success(res, '')
  }
}
