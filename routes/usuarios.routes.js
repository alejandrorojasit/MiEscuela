const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')
const bcrypt = require('bcrypt')

const data = require('../models/usuarios')

app.get('/', verificarToken,(req,res) => {
   data.find(
      (err,data)=>
      res.json(data)
   )
})

app.get('/:usuario',verificarToken,(req,res) => {
   data.findOne(
   {
      usuario:req.params.usuario
   },
      (err,data)=>
      res.json(data)
   )
})

{/*
app.post('/Delete', verificarToken,async (req,res) => {
   let body = req.body
   data.findOneAndRemove(
      {
         usuario:body.usuario
      },
      (err,data)=>
      {
      if(err) return res.status(500).send(err)
      const response = {
      message: 'Usuario Eliminado con exito'
      } 
      return res.status(200).send(response)
      }
   )
})
*/}

app.delete('/Delete/:id',verificarToken,(req,res) => {
   data.findOneAndRemove({
      usuario:req.params.id
   },
      (err,data)=>
      res.json(data)
   )
})

app.post('/AddUser', verificarToken,(req,res) => {
   let sendData = new data({
      usuario: req.body.usuario,
      password: bcrypt.hashSync(
         req.body.password, 
         8
      ),
      role: req.body.role
   });
   sendData.save(
      (err,data)=>
      res.json(data)     
   )
})

module.exports = app
