const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const vaccination = require('./routes/vaccination')
app.use('/vaccination', vaccination)

module.exports = app