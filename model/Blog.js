const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String
    },
    imageUrl: {
        type: String
    },
    author: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Blog", blogSchema);