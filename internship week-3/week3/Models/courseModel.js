const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        Unique:true,
    },
    Credits:{
        type:Number,
        required:true,
    },
    Code:{
        type:String,
        required:true,
        Unique:true,
    },
    Teachhours:{
        type:Number,
        required:true,
    },
    Letchuresassigned:{
        type:String,
        required:true,
        Unique:true,
    },
    Outcome:{
        type:String,
        required:true,
        Unique:true,
    },
},
{timestamps:true}
);

module.exports=new mongoose.model("Course",courseSchema);