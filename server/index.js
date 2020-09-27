const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const meliRequest = require('./meli-http-request')
const port = process.env.PORT || 6000
dotenv.config()

app.use(bodyParser.json())

app.use('/', express.static(__dirname + './../app/dist'))

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})

app.get('/api/items', async (req, res) => {
  const {
    query: { q }
  } = req
  try {
    const response = await meliRequest.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    res.json({...response, results: response?.results?.slice(0, 4)})
  } catch (e) {
    res.json(e)
  }
})

app.get('/api/items/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const product = await meliRequest.get(`https://api.mercadolibre.com/items/${id}`)
    const description =  await meliRequest.get(`https://api.mercadolibre.com/items/${id}/description`)
    res.json({...product, description})
  } catch (e) {
    res.json(e)
  }
})

