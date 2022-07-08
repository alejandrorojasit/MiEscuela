const createMatriculaSchema = require('../logic/matricula.logic')
const mongoose = require('mongoose')
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

app.post('/nuevoAlumno',verificarToken,(req,res)=> {
   
   mongoose.model(req.body.currentYear)({...req.body.dataPost,estado:'Activo'}).save(
      (err,data)=>
         res.json(data)
   )

})

app.put('/updateAlumno', verificarToken,(req,res) => {

   let {_id,data,dataRegistro,currentYear} = req.body
   data = {...data , $push: {registro: dataRegistro}}
   mongoose.model(currentYear).findOneAndUpdate(
      {_id : _id},
      data,
      (err,data)=> {
         res.json(data)
      }
   )

})

app.put('/updateObservaciones',verificarToken,(req,res)=>{

   const {_id,data,dataRegistro,currentYear} = req.body
   dataToSend = {$push: {observaciones:data}}
   mongoose.model(currentYear).findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data)=> {
         res.json(data)
      }
   )

})

app.put('/updateRegistroSalud/',verificarToken,(req,res) => {

   const {_id,data,currentYear} = req.body
   dataToSend = {$push:{registroSalud:data}}
   mongoose.model(currentYear).findOneAndUpdate(
      {_id : _id},
      dataToSend,
      (err,data) => {
         res.json(data)
      }
   )

})


app.put('/updateWholeDB', verificarToken,(req,res) => {

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

   const currentYear = req.body.currentYear
   let collectionExist = false
   const date = new Date()
   const listCollections = await mongoose.connection.db.listCollections()
      .toArray()

   listCollections.map(name => {
      if(name.name === (date.getFullYear()).toString() && collectionExist === false){
         collectionExist = true
      }
   })

   if(collectionExist === true){
      res.status(409).json({
         message:"La base de datos del corriente año ya existe no es posible realizar esta accion ahora."
      })
   }else{
      const isSealed = await mongoose.model('sealedDatabase').findOne({
         name : currentYear
      })
      if(isSealed.isSealedIniPrim === false || isSealed.isSealedSecu === false){
         res.status(405).json("La base de datos no esta sellada, los coordinadores administrativos de cada ciclo deben realizar el fin de ciclo lectivo en administracion para poder realizar la copia de la base de datos.")
      }else{
         createMatriculaSchema(date.getFullYear().toString())
         const dataInfo =  await mongoose.model(currentYear).find({estado:"Activo"})
         const newDoc = []
         for(var i = 0; i < dataInfo.length ; i ++ ){
            const {['_id']:_id,...rest} = dataInfo[i]._doc
            newDoc.push(rest)   
         }
         mongoose.model(date.getFullYear().toString()).create(newDoc,(err,result)=>{
            if(err){
               res.json(err)
            }else{
               mongoose.model('HardCodeData').findOneAndUpdate(
                  {name: 'hardCodeData'},
                  {$push:{matriculas:date.getFullYear().toString()}},
                  ()=>{}
               )   
               mongoose.model('sealedDatabase')({
                  name:date.getFullYear().toString(),
                  isSealedIniPrim:false,
                  isSealedSecu:false,
               }).save()
               res.status(201).json(result)
            }
         })

      }
   }
}

)

app.get('/getYear',(req,res)=> {

   const date = new Date()
   res.json(date.getFullYear())

})

app.get('/activo/:year',async (req,res) => {

   let collectionExist =  false
   const listCollections = await mongoose.connection.db.listCollections().toArray()
   

   listCollections.map(name => {
      if(name.name === req.params.year && collectionExist===false){
         collectionExist = true
      }
   })

   if(collectionExist){

      let modelExist = false 
      const models = mongoose.modelNames()
      console.log(models)
      models.map(model => {
         if(model === req.params.year){
            modelExist = true
         }
      })

      if(modelExist){
         mongoose.model(req.params.year).find({estado:"Activo"},
            (err,data)=>
               res.json(data)
         )
      }else{
         const data = createMatriculaSchema(req.params.year)
         data.find({estado:"Activo"},
            (err,data) => 
               res.json(data)
         )
      }

   }else{
      res.status(404).json(`No existe la base de datos para el año ${req.params.year}`)
   }

})

app.get('/completa/:year',(req,res) => {

   mongoose.model(req.params.year).find(
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

app.get('/single/:nDni/:year',verificarToken,(req,res) => {

   mongoose.model(req.params.year).findOne(
      {
         nDniAlumno : req.params.nDni
      },
      (err,data)=> 
         res.json(data)
   )

})

module.exports = app
