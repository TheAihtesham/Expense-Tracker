const mongoose = require('mongoose');

const db = async () =>{
   try {
    await mongoose.connect('mongodb+srv://KaiF:HelloKaiF@newcluster1.ogltd.mongodb.net/testdb?retryWrites=true&w=majority&appName=NewCluster1');
    console.log("DB connected")
   } catch (error) {
    console.log(error.message)
   }
}

module.exports = { db };   