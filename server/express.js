const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const setupExpress = () => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, '../build')))
  app.listen(3001, () => console.log('Server listening on 3001'))
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))
}

module.exports = setupExpress
