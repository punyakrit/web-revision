const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean
})

const todo = mongoose.model("Todo", todoSchema)

module.exports = {todo}