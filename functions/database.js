const mongoose = require('mongoose')
const {serverAddress} =  require('./variables')
mongoose.connect(serverAddress)
   .then(db => console.log('DB is connected'))
   .catch(err => console.error(err))

module.exports = mongoose;
