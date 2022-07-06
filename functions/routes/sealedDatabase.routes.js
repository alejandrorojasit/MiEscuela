const express = require('express')

const app = express.Router()

const {verificarToken} = require('../autentication')

const data = require('../models/sealedDatabase')

app.get('/single/:year',verificarToken,(req,res)=> {
   data.findOne(
      {
         name: req.params.year
      },
      (err,data) =>
         res.json(data)
   ) 
})

app.put('/finCicloLectivo',verificarToken,(req,res)=> {
   
   data.findOneAndUpdate(
      {name:req.body.currentYear},
      req.body.forSeal,
      (req,data) => {
         res.json(data)
      }
   )
})


module.exports = app
