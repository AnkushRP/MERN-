const studentModel = require('../models/studentsModels');
const {validEmail,validPass,validMobile}= require('../validation/valid')
const createStudent = async function(req,res){
  try{
  let student = req.body;
  let{ fname,lname,email,password,mobile,address}=student;

  //validation
 if (!fname || !lname || !email || !password || !mobile|| !address){
 return res.send({ message: "please provide all info "})
 }
if (!validEmail)return res.send({message:"please enter valid email"})
if (!validPass)return res.send({message:"please enter valid passward"})
if (!validMobile)return res.send({message:"please enter valid phone no"})

// unique validation
let uniqueEmail = await studentModel.findOne({email})
if(uniqueEmail) return res.send({message:"Email already exist "})
let uniquePhone = await studentModel.findOne({mobile})
if(uniquePhone) return res.send({message:"Phone already exist "})



  let createStu =await studentModel.create(student)
  return res.send({message: createStu})
}catch(err){
  console.log(err)
}
}

//login Api

let loginStudent = async (req,res)=>{
  try{
let data =req.body
let {email,password}= data
if ( !email || !password ){
  return res.status(400).send({ message: "please provide email & password info "})
  }
let matchStudent  =await studentModel.findOne({email,password})
if (!matchStudent){
  return res.status(200).send({msg:"Student not Registered"})
}
else{return res.send("registered ")}
const token= jwt.sign({
stdId:matchStudent._id.toString(),

}, "mernStack",
{  
expiresIn:"12000sec"
 }
)

return res.status(200).send({status:true , msg:"Student logged In Successfully", data:token })

  }catch(error){
return res.status(500).send({status:false,msg:"internal server error"})
  }
}

//get api

let getStudent = async (req,res)=>{
  try{
  let deleteStu  = await studentModel.find()
  return res.send(deleteStu)
  }catch(error){
  console.log(error);
}
}
module.exports ={createStudent,loginStudent,getStudent}

