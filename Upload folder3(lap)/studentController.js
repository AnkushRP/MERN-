const StudentModel=require("../Models/studentModel.js");
const validation =require("./validator.js");
let jwt=require("jsonwebtoken")

//Register student
let createStudent=async (req,res)=>{
try{
    let data=req.body;
    if(!validation.isValidBody(data)){
        res.status(400).send({status:false,msg:"no data provided"});
    }
    let {Name,Usn,Gender,Email,Mobile,Password}=data;
    
    //Name validation
    if(!validation.isValid(Name)){
        return res
        .status(400)
        .send({status:false,msg:"Please enter your name"});
    }
    if(!validation.isValidName.test(Name)){
        return res.status(400).send({status:false,msg:"invalid name"});
    }
    //Usn validation
    if(!validation.isValid(Usn)){
        return res
        .status(400)
        .send({status:false,msg:"Please enter your Usn number"});
    }
    let dupUsn=await StudentModel.findOne({Usn});
    if(dupUsn){
        return res.status(400).send({msg:"Usn already entered"});
    }
    //Gender validation
    if(!validation.isValid(Gender)){
        return res
        .status(400)
        .send({status:false,msg:"Gender is required"});
    }
    //Email validation
    if(!validation.isValid(Email)){
        return res
        .status(400)
        .send({status:false,msg:"Please enter your Email"});
    }
    if(!validation.isValidEmail.test(Email)){
        return res.status(400).send({status:false,msg:"invalid email"});
    }

    let dupEmail=await StudentModel.findOne({Email});
    if(dupEmail){
        return res.status(400).send({msg:"Email already entered"});
    }
    //Mobile validation
    if(!validation.isValid(Mobile)){
        return res
        .status(400)
        .send({status:false,msg:"Please enter your Mobile number"});
    }
    if(!validation.isValidMobile.test(Mobile)){
        return res.status(400).send({status:false,msg:"invalid mobile number"});
    }
    let dupMobile=await StudentModel.findOne({Mobile});
    if(dupMobile){
        return res.status(400).send({msg:"Mobile number already entered"});
    }
    //Password validation
    if(!validation.isValid(Password)){
        return res
        .status(400)
        .send({status:false,msg:"Please enter your Password"});
    }

    let registerStudent=await StudentModel.create(data);
    return res.status(201).send({
        status:true,
        msg:"Student Data registered Successfully",
        data:registerStudent,
    });
}catch(error){
    return res
    .status(500)
    .send({status:false,msg:"Internal Server Error"});
    }
};

//Login student

let loginStudent=async(req,res)=>{
    try{
        let data=req.body;
        if(!validation.isValidBody(data)){
            return res.status(404).send({status:false,msg:"No data provided"});
        }
        let{Email,Password}=data;
        if(!validation.isValid(Email)){
            return res.status(400).send({msg:"Please enter your email"});
        }
        if(!validation.isValid(Password)){
            return res.status(400).send({msg:"Please enter your password"});
        }

        let matchStudent=await StudentModel.findOne({Email,Password});
        if(!matchStudent){
            return res.status(200).send({msg:"Student Not Registered"});
        }else{
            const token=jwt.sign({
                studentId:matchStudent._id.toString(),
            },
            "MERN STACK",{
                expiresIn:"20000sec",
            }
            );
            return res
            .status(200)
            .send({msg:"Student logged in successfully",token});
        }
    }catch(error){
        return res
        .status(500)
        .send({ststus:false,msg:"Internal Server Error"});
    }
};

module.exports={createStudent,loginStudent};