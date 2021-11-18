const mongoose = require('mongoose')

const {Schema} = mongoose

const LogInSchema = new Schema({
   usuario: {type: String ,required: true},
   password: { type: String , required: true },
},{collection: 'Users'});

module.exports = mongoose.model('LogIn', LogInSchema)
