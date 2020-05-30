const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String
})

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
})

const User = new mongoose.model('User', userSchema)
const Product = new mongoose.model('Product', productSchema)

module.exports = {
  User,
  Product
}
