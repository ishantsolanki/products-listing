const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoDb = require('./mongodb')

const setupExpress = () => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(express.static(path.join(__dirname, '../build')))
  app.use(cors())
  app.listen(3001, () => console.log('Server listening on 3001'))
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))

  app.put('/signup', (req, res) => {
    new mongoDb.User({
      username: req.body.userEmail,
      password: req.body.password
    }).save((err) => {
      if (err) res.sendStatus(400)
      res.send('success')
    })
  })

  app.put('/checkUser', (req, res) => {
    mongoDb.User.exists({
      username: req.body.userEmail,
      password: req.body.password
    })
    .then(exists => res.send({ result: exists }))
    .catch(err => {
      res.setStatus(404)
      res.send(err)
    })
  })
}

module.exports = setupExpress
