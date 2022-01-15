const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("add your mongo atlas url here and replace <password> with your own password which you added while adding the user");
    console.log("Mongo DB connected")
}

module.exports = connectDB;