const express = require("express")
const app = express()

const path = require("path")
const router = require("./router")
const mongodb = require("./database/connection")


app.use(express.static(path.join(__dirname, "public")))

mongodb.connected()

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//router
app.use("/", router)

//server
const port = process.env.port || 3000
app.listen(port, () =>{
  console.log(` server running on port ${port}`)
})