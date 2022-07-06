const mongoose = require('mongoose')

const {Schema} = mongoose

const sealedDatabaseSchema =  new Schema ({
   name            : {type : String,require  : true},
   isSealedIniPrim : {type : Boolean,require : true},
   isSealedSecu    : {type : Boolean,require : true},
},{collection:'SealedDatabase'})

module.exports =  mongoose.model('sealedDatabase',sealedDatabaseSchema)
