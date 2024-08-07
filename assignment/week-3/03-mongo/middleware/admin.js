<<<<<<< HEAD
const { Admin } = require('../db');

=======
import { Admin } from '../db';
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
<<<<<<< HEAD
  let username = req.headers.username;
  let password = req.headers.password;

  if (username && password) {
    Admin.findOne({
      username: username,
      password: password,
    }).then((result) => {
      console.log(result);
      if (result) {
        next();
      } else {
        res.status(403).json({
          msg: "We don't have admin with this cred",
        });
      }
    });
=======
  const z = require('zod');
  const username = z.string().email().safeParse(req.header.username);
  const password = z.string().min(6).safeParse(req.header.password);

  try {
    if (username.data && password.data) {
      Admin.findOne({
        username: username.data,
        password: password.data,
      })
        .then((result) => {
          if (result) {
            next();
          }
        })
        .catch((err) => {
          res.status(404).json({
            msg: "Admin doesn't exist",
            err: err,
          });
        });
    }
  } catch (error) {
    return null;
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
  }
}

module.exports = adminMiddleware;
