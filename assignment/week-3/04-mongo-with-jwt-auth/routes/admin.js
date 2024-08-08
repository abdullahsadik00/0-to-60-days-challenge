const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, User, Course } = require('../db');
const router = Router();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username,
    password,
  }).then((result) => {
    if (result) {
        res.json({
        msg: 'Admin created successfully',
      });
    } else {
      res.json({
        msg: 'Error occured',
      });
    }
  });
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      jwtPassword
    );
    res.json({
      token,
    });
  } else {
    res.json({
      msg: 'Invalid Username and Password',
    });
  }
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  Course.create({
    title,
    description,
    price,
    imageLink,
  }).then((result) => {
    if (result) {
      res.json({
        msg: 'Created Successfully',
        Course: result._id,
      });
    } else {
      res.json({
        msg: 'Error occured',
      });
    }
  });
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then((result) => {
    res.json({
      course: result,
    });
  });
});

module.exports = router;
