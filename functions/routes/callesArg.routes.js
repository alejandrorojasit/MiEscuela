const express =  require('express')

const app =  express.Router()

const {verificarToken} = require('../autentication')

const data = require('../models/callesArg')

app.get('/:municipio',verificarToken,(req,res)=> {
   console.log(req.params.municipio)
   data.find(
      {
         "localidad_censal.nombre": req.params.municipio
      },
      (err,data)=> 
      res.json(data)
   )
})

module.exports = app
