<<<<<<< HEAD
const { User } = require('../db');

function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username; // harkirat@gmail.com
  const password = req.headers.password; /// 123456

  User.findOne({
      username: username,
      password: password
  })
  .then(function(value) {
      if (value) {
          next();
      } else {
          res.status(403).json({
              msg: "User doesnt exist"
          })
      }
  })
}


=======
import { Admin } from '../db';

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const z = require('zod');
  const username = z.string().email().safeParse(req.header.username);
  const password = z.string().min(6).safeParse(req.header.password);

  if (username && password) {
    Admin.findOne({
      username: username,
      password: password,
    }).then((result) => {
      if (result) {
        next();
      } else {
        res.status().json({
          msg: "User dosen't exist",
        });
      }
    });
  }
}

>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
module.exports = userMiddleware;
