const mongoose = require('mongoose')
const {Schema} = mongoose

const matriculaSchemaObject = require('../models/matriculaSchemaObject')
const matriculaSchema = new Schema(matriculaSchemaObject)
const data = require('../models/matricula')
const modelToBackUpDb = mongoose.model('2020',matriculaSchema)
const express = require('express')
const app = express.Router()
const {verificarToken} = require('../autentication')

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

app.post('/updateObservaciones',verificarToken,(req,res)=>{
   let _id = req.body._id
   let dataObservacion = req.body.data
   let dataRegistro = req.body.dataRegistro
   dataToSend = {$push: {observaciones:dataObservacion}}
   data.findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data)=> {
         res.json(data)
      }
   )
})

app.post('/updateRegistroSalud',verificarToken,(req,res) => {
   let _id = req.body._id
   let dataRegistroSalud =  req.body.data
   dataToSend = {$push:{registroSalud:dataRegistroSalud}}
   data.findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data) => {
         res.json(data)
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
      }
   )
})

app.post('/copywholedb',verificarToken,async(req,res) => {
   await modelToBackUpDb.create(req.body.data,(err,result)=>{
      if(err){
         res.json(err)
      }else{
         res.json(result)
      }
   })
      }
)

app.get('/activo',(req,res) => {

   data.find({estado:"Activo"},
      (err,data)=>
      res.json(data)
   )
})

app.get('/completa',(req,res) => {

   data.find(
      (err,data)=>
      res.json(data)
   )
})

app.get('/baja',(req,res) => {

   data.find({estado:"Baja"},
      (err,data)=>
      res.json(data)
   )
})

app.get('/single',verificarToken,(req,res)=> {
   res.json([])
})

app.get('/single/:_id',verificarToken,(req,res) => {

   data.findOne(
   {
      _id : req.params._id
   },
      (err,data)=> 
      res.json(data)
   )
})
module.exports = app
