const mongoose = require("mongoose")

const TestSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const TestModel = mongoose.model("users", TestSchema)
module.exports = TestModel