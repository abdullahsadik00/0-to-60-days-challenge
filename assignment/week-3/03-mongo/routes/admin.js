const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Course, Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;

  Admin.create({
    username,
    password,
  }).then((result) => {
    if (result) {
      res.status(201).json({
        message: 'Admin created successfully',
      });
    }
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
  console.log('courses route is comming here');
  Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  }).then((result) => {
    res.json({
      message: 'Course created successfully',
      courseId: result._id,
    });
  });
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then((result) => {
    res.json({ courses: result });
  });
});

module.exports = router;
