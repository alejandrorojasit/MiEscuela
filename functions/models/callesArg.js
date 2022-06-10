const mongoose =  require('mongoose')

const {Schema} =  mongoose

const callesArgSchema =  new Schema ({
   altura           : {type : Object,require : true},
   categoria        : {type : String,require : true},
   fuente           : {type : String,require : true},
   departamento     : {type : Object,require : true},
   nombre           : {type : String,require : true},
   id               : {type : String,require : true},
   provincia        : {type : Object,require : true},
   localidad_censal : {type : Object,require : true},
},{collection:'CallesArg'})

module.exports =  mongoose.model('callesArg',callesArgSchema)
