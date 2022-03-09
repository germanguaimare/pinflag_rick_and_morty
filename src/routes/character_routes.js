import app from 'express'
import asyncHandler from 'express-async-handler'

import CharacterController from '../controllers/character_controller.js'

const routes = app.Router()

routes.get('/:N', new CharacterController().index)
routes.post('/', new CharacterController().create)

export default routes
