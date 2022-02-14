const mongoose = require('mongoose')
let serverAddress = 'mongodb+srv://alejandrorojasit:as050906@miescuelacluster.yxlu2.mongodb.net/MiEscuela?retryWrites=true&w=majority'
mongoose.connect(serverAddress)
   .then(db => console.log('DB is connected'))
   .catch(err => console.error(err))

module.exports = mongoose;
