const mongoose = require('mongoose')
const {Schema} =  mongoose

const matriculaSchemaObject = require('../models/matriculaSchemaObject')

const createMatriculaSchema = (collection) => {
   const matriculaSchema = new Schema(matriculaSchemaObject,{collection:collection.toString()})

   return mongoose.model(collection.toString(),matriculaSchema)
}

module.exports =  createMatriculaSchema
