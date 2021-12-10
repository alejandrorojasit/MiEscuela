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

app.delete('/delete/:id',verificarToken,(req,res) => {
   console.log(req.params.id)
   data.findOneAndRemove({
      usuario:req.params.id
   },
      (err,data)=>
      res.json(data)
   )
})

app.post('/addUser', verificarToken,(req,res) => {
   let sendData = new data({
      usuario: req.body.usuario,
      password: bcrypt.hashSync(
         req.body.password, 
         8
      ),
      role: req.body.role,
      permissions: req.body.permissions
   });
   sendData.save(
      (err,data)=>
      res.json(data)     
   )
})

app.post('/updateUsuario', verificarToken,(req,res) => {

   let id = req.body._id
   let dataToSend = req.body.data
   console.log(dataToSend.password)
   dataToSend.password !== undefined ?
      dataToSend.password = bcrypt.hashSync(
         dataToSend.password,
         8
      )
      :
      null
   data.findOneAndUpdate(
      {_id : id},
      dataToSend,
      (err,data)=> {
         res.json(data)
      }
   )
})

module.exports = app
