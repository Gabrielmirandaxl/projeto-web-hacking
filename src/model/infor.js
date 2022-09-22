const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  infor: String,

})

const Model = mongoose.model("dados", schema)

module.exports = Model