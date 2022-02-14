const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data =  require('../models/hardCodeData')

app.get('/',verificarToken,(req,res)=> {
   data.find(
      (err,data) =>
         res.json(data)
   )
})

module.exports = app
