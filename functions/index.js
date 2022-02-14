const functions = require("firebase-functions")
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

const {mongoose} = require('./database');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//Routes
app.use('/api/logIn',require('./routes/login.routes'))
app.use('/api/matricula',require('./routes/matricula.routes'))
app.use('/api/usuarios',require('./routes/usuarios.routes'))
app.use('/api/verifyToken',require('./routes/verify.routes'))
app.use('/api/hardCodeData',require('./routes/hardCodeData.routes'))

exports.app = functions.https.onRequest(app)
