import models from '../models/index.js'
import axios from "axios"
import BaseController from './base.js'

export default class CharacterController extends BaseController {
  CharacterController() { }

  async index(req, res) {

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
    const Character = models.Character
    const body = req.body
    const newChar = {
      name: body.name,
      status: body.status,
      species: body.species,
      origin: body.origin
      }
    Character.create(newChar)
    console.log(body)
    return super.Success(res, "Post al endpoint de creación")
  }

  async show(req, res) {
    return super.Success(res, '')
  }
}
