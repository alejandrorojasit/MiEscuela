const mongoose = require('mongoose')

const {Schema} = mongoose

const usersSchema = new Schema({
   usuario: {type: String,require:true},
   password: {type: String, require:true},
   role:{type:String,require:true},
},{collection: 'Users'});

module.exports = mongoose.model('Users', usersSchema)
