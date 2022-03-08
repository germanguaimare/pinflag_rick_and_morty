
import { DataTypes, Op } from 'sequelize'
import sequelize from '../config/sequelize.js'
import Methods from "./character_model.js"


const models = {}

models.Character = Methods

export { sequelize, Op }
export default models
