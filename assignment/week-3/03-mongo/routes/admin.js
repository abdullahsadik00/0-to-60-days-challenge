const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
<<<<<<< HEAD
const { Course, Admin } = require('../db');
=======
const { Admin, Course } = require('../db');
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
<<<<<<< HEAD

  Admin.create({
    username,
    password,
  }).then((result) => {
    if (result) {
      res.status(201).json({
        message: 'Admin created successfully',
      });
    }
=======
  Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: 'Admin created successfully',
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
<<<<<<< HEAD
  console.log('courses route is comming here');
=======
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
  Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
<<<<<<< HEAD
  }).then((result) => {
    res.json({
      message: 'Course created successfully',
      courseId: result._id,
    });
=======
  });
  res.json({
    message: 'Admin created successfully',
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
  });
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
<<<<<<< HEAD
  Course.find({}).then((result) => {
    res.json({ courses: result });
  });
=======
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
});

module.exports = router;
