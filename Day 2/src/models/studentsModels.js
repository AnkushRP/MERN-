const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fname : {
        type : String,
    },
    lname : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    mobile:{
        type : String,
        required:true,
    },
    address : {
        type : String,
    }
    },  {timestamps : true

})

module.exports = mongoose.model('Student',studentSchema)