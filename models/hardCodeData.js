const mongoose = require('mongoose')

const {Schema} = mongoose

const hardCodeDataSchema =  new Schema({
   nivel: {type:Array,require:true},
   sexo: {type:Array,require:true},
   vacunas: {type:Array,require:true},
   division: {type:Array,require:true},
   grado: {type:Array,require:true},
   modelPdf: {type:Array,require:true},
   nivel: {type:Array,require:true},
   role: {type:Array,require:true},
   sexo: {type:Array,require:true},
   vacunas: {type:Array,require:true},
},{collection: 'HardCodeData'})

module.exports = mongoose.model('HardCodeData',hardCodeDataSchema)
