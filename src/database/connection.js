const mongoose = require("mongoose")

function connected(){

mongoose.connect("mongodb://localhost:27017/infor")

const db = mongoose.connection

db.once("open", () => {
  console.log("database connected")
})

db.on("on", () =>{
   console.error.bind(console, "erro database")
})

}

module.exports = {
  connected
}