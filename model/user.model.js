const mongoose = require("mongoose")
const cartItemSchema = require("./cart.model")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart:[cartItemSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})



module.exports = mongoose.model("User",userSchema)