const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const meliRequest = require('./meli-http-request')
const port = process.env.PORT || 3000
dotenv.config()

app.use(bodyParser.json())

app.use(express.static(__dirname + './../app/dist'))

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})

app.get('/items', async (req, res) => {
  const {
    query: { search }
  } = req
  try {
    res.json(await meliRequest.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`))
  } catch (e) {
    res.json(e)
  }
})

app.get('/items/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    res.json(await meliRequest.get(`https://api.mercadolibre.com/items/${id}`))
  } catch (e) {
    res.json(e)
  }
})

app.get('/items/:id/description', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    res.json(await meliRequest.get(`https://api.mercadolibre.com/items/${id}/description`))
  } catch (e) {
    res.json(e)
  }
})
