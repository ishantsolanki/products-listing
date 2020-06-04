const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")

const users = require("./users")
const products = require("./products")

const app = express()

const setupExpress = () => {
  const PORT = process.env.PORT || process.env.REACT_APP_API_PORT
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(express.static(path.join(__dirname, "../build")))
  app.use(cors())
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../build/index.html")),
  )

  app.put("/signup", users.signUp)

  app.put("/checkUser", users.checkUser)

  app.post("/addProduct", products.addProduct)

  app.get("/fetchProducts", products.fetchProducts)

  app.delete("/deleteProduct", products.deleteProduct)

  app.put("/updateProduct", products.updateProduct)
}

module.exports = setupExpress
