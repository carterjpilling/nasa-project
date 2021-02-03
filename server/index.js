require('dotenv').config()
const express = require('express')
const ApiCtrl = require('./ApiController')
const EventCtrl = require('./EventController')

const app = express()

const { SERVER_PORT } = process.env

app.use(express.json())

app.get('/api/nasa/photo', ApiCtrl.photo)
app.get('/api/nasa/mars', ApiCtrl.mars)
app.get('/api/nasa/images/:searchitem', ApiCtrl.images)


app.get('/api/events', EventCtrl.getRecentEvents)
app.get('/api/events/category/:category', EventCtrl.getEventByCategory)

app.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PORT} is live.`)
})