const mongoose = require("mongoose")
require("dotenv").config()

const connectToDB = async () => {
  try{
    await mongoose.connect(process.env.MONOGO_URI)
    console.log("Database connected")
  }
  catch(error){
    console.log(error)
  }
}

module.exports = connectToDB;