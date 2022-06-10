const express = require('express')

const app = express.Router()

const {verificarToken} =  require('../autentication')

const data = require('../models/municipiosArg')

app.get('/:provincia',verificarToken,(req,res)=> {
   data.find(
      {
         "provincia.nombre": req.params.provincia
      },
      (err,data) => {
         res.json(data)
      }
   )
})

module.exports = app
