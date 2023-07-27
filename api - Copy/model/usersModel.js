const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
     name:{
        type: String,
        require: true,
     }, 
     email:{
        type: String,
        require: true,
        unique: true,
     },
     password:{
        type: String,
        require: true,
        unique: true,
     }
})
const Users = mongoose.model('Users', usersSchema);
module.exports = Users