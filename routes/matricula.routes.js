const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

const data = require('../models/matricula')

app.post('/Ratificacion',verificarToken,(req,res) => {
   let body =  req.body
   data.find(
      {
         nivel: body.NIVEL, 
         grado: body.GRADO , 
         division: body.DIVISION},
      (err,data)=>
      res.json(data)
   )
})

app.get('/Activo',verificarToken,(req,res) => {

   data.find({estado:'Activo'},
      (err,data)=>
      res.json(data)
   )
})

app.get('/Single',verificarToken,(req,res)=> {

   res.json({message: 'Peticion sin identificador de _id'})
})

app.get('/Single/:_id',verificarToken,(req,res) => {

   data.findOne(
   {
      _id : req.params._id
   },
      (err,data)=> 
      res.json(data)
   )
})

app.post('/UpdateAlumno', verificarToken,(req,res) => {

   let _id = req.body._id
   let dataToSend = req.body.data
   let dataRegistro = req.body.dataRegistro
   dataToSend = {...dataToSend , $push: {registro: dataRegistro}}
   data.findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data)=> {
         res.json(data)
         console.log(err)
      }
   )
})

app.post('/updateWholeDB', verificarToken,(req,res) => {

   let _id = req.body._id
   let dataToSend = req.body.data
   let dataRegistro = req.body.dataRegistro
   data.findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data)=> {
         res.json(data)
         console.log(err)
      }
   )
})
module.exports = app
