const express = require('express')

const mongoose = require('mongoose')
const { createStudent, loginStudent,getStudent } = require('../controller/studentControl')

const { createCourse } = require('../controller/courseControl')
const router = express.Router()

router.get('/',(req,res)=>{
   res.send("Router Method !!")
})

router.post('/create',createStudent)
router.post('/course',createCourse)

//login Student
router.post("/login", loginStudent)
router.post( "/get", getStudent)
module.exports = router;
