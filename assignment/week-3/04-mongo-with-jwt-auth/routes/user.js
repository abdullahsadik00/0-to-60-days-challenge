const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    User.create({
        username,password
    }).then((result)=>{
        if(result){
            res.json({
                msg:"User created succesfully"
            })
        }else{
            res.json({
                msg:"Error Occured"
            })
        }
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    User.find({
        username,password
    }).then((result)=>{
        if(result){
            const token = jwt.sign({username,password},jwtPassword)
            res.json({
                token
            })
        }else{
            res.json({
                msg:"Error occured"
            })
        }
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((result)=>{
        res.json({
            course:result
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId;
    let username= req.headers.username;
    User.find({username}).then((result)=>{
        if(result){
            User.updateOne({username},{
                "$push":{
                    purchasedCourses:courseId
                }
            }).then(()=>{
                res.json({
                    message: "Purchase complete!"
                })
            })
        }

    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let username = req.headers.username;
    User.findOne({
        username
    }).then((user)=>{
        if(res){
            Course.find({
                _id:{
                    "$in":user.purchasedCourses  
                }
            }).then((result)=>{
                res.json({
                    purchasedCourse:result
                })
            })
        }
    })
});

module.exports = router