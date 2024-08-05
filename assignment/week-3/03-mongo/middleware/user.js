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

module.exports = userMiddleware;
