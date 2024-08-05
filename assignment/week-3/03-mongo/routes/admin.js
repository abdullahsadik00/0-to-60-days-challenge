const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: 'Admin created successfully',
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
  Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });
  res.json({
    message: 'Admin created successfully',
  });
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
