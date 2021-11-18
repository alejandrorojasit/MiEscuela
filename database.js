const mongoose = require('mongoose')
let serverAddress = process.env.SERVER_ADDRESS
mongoose.connect(serverAddress)
   .then(db => console.log('DB is connected'))
   .catch(err => console.error(err))

module.exports = mongoose;
