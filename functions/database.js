const mongoose = require('mongoose')
const {serverAddress} =  require('./variables')

const db = mongoose.connect(serverAddress)
   .then(res => console.log('DB is connected'))
   .catch(err => console.error(err))

module.exports = db;
