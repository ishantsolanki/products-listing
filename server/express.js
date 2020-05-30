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
    console.log('recieved request for signup', JSON.stringify(req.body.username, req.body.password))


    const newUser = new mongoDb.User({
      username: req.body.username,
      password: req.body.password
    })

    newUser.save((err) => {
      if (err) res.setStatus(400)
      res.send('success')
    })
  })
}

module.exports = setupExpress
