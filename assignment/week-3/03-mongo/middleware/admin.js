const { Admin } = require('../db');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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
  }
}

module.exports = adminMiddleware;
