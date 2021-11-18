const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

app.get('/', verificarToken,(req,res) => {
   data.find(
      (err,data)=>
      res.json(data)
   )
   })

app.post('/', verificarToken,(req,res) => {
        res.json({
            ok:true,
        })
})

app.post('/:usuario',(req,res)=> {
   let body = req.body
})

module.exports = app
