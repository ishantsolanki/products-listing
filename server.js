const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://ishant:solanki@cluster0-de8jp.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {  useUnifiedTopology: true })
.then(client => {
    console.log('Connected to database')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, '/build')))
    const db = client.db('products-listing')

    app.listen(3001, () => console.log('Server listening on 3001'))

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build/index.html')))
  })
  .catch(err => console.log(err))

