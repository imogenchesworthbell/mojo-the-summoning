const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const views = require('./views')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.get('/', (_req, res) => {
  res.send('Welcome to Mojo: The Summoning!')
})

app.use('/user', views.user.router)
app.use('/card', views.card.router)

app.use(express.static(path.join(__dirname, 'static')))

module.exports = app
