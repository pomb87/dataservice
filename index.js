const express = require('express')

const app = express()
var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const vaccination = require('./routes/vaccination')
app.use('/vaccination', vaccination)

module.exports = app