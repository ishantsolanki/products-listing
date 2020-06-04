const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const User = new mongoose.model("User", userSchema)

const signUp = (req, res) => {
  new User({
    username: req.body.userEmail,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      res.sendStatus(400)
      return
    }
    res.json({ result: true })
  })
}

const checkUser = (req, res) => {
  User.exists({
    username: req.body.userEmail,
    password: req.body.password,
  })
    .then((exists) => res.send({ result: exists }))
    .catch((err) => {
      res.setStatus(404)
      res.send(err)
    })
}

module.exports = {
  signUp,
  checkUser,
}
