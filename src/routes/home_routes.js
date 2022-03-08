import app from 'express'

import HomeController from '../controllers/home_controller.js'

const routes = app.Router()

routes.get('/', new HomeController().get)

export default routes
