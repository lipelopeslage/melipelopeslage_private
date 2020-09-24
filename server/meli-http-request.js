const https = require('https')

const get = async (url) =>
  new Promise((res, rej) => {
    https.get(url, (response) => {
      const data = []
      response.setEncoding('utf8')
      response.on('data', (body) => data.push(body))
      response.on('end', () => res(JSON.parse(data.join(''))))
      response.on('error', () => rej({ error: 'MELIERROR!' }))
    })
  })

module.exports = { get }
