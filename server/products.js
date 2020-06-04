const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
})

const Product = new mongoose.model("Product", productSchema)

const addProduct = (req, res) => {
  const { name, description, price, currency } = req.body
  new Product({ name, description, price, currency }).save((err) => {
    if (err) {
      res.sendStatus(400)
      return
    }

    res.json({ result: true })
  })
}

const fetchProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      res.sendStatus(400)
    }

    return res.json(
      products.map((product) => ({
        name: product.name,
        description: product.description,
        price: product.price,
        currency: product.currency,
        id: product._id,
      })),
    )
  })
}
const deleteProduct = (req, res) => {
  if (req.query.id) {
    Product.findByIdAndRemove(req.query.id, (err) => {
      if (err) {
        res.sendStatus(400)
        return
      }

      res.json({ result: true })
    })
  } else {
    res.sendStatus(400)
  }
}

const updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.body.id, req.body, (err) => {
    if (err) {
      res.sendStatus(400)
      return
    }

    res.json({ result: true })
  })
}

module.exports = {
  addProduct,
  fetchProducts,
  deleteProduct,
  updateProduct,
}
