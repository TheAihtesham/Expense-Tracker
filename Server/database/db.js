const mongoose = require('mongoose');

const db = async () =>{
   try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected")
   } catch (error) {
    console.log(error.message)
   }
}

module.exports = { db };   