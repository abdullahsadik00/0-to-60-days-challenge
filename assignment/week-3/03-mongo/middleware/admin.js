import { Admin } from '../db';
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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
  }
}

module.exports = adminMiddleware;
