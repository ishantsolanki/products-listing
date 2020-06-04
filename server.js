const mongoose = require("mongoose")

const setupExpress = require("./server/express")

const connectionString =
  "mongodb+srv://ishant:solanki@cluster0-de8jp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:"),
)

mongoose.connection.once("open", () => {
  console.log("Connected to database")
  setupExpress()
})
