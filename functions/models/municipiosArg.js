const mongoose = require('mongoose')

const {Schema} =  mongoose

const municipiosArgSchema =  new Schema ({
   nombre_completo : {type : String,require : true},
   fuente          : {type : String,require : true},
   nombre          : {type : String,require : true},
   id              : {type : String,require : true},
   provincia       : {type : Object,require : true},
   categoria       : {type : String,require : true},
   centroide       : {type : Object,require : true},
},{collection: 'MunicipiosArg'})

module.exports =  mongoose.model('municipiosArg',municipiosArgSchema)
