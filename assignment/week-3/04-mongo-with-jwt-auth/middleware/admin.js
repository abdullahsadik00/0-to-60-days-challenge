const { Admin } = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  let token = req.headers.authorization;
  let word = token.split('');
  let jwtToken = word[1];
  try {
     const decodedValue = jwt.verify(jwtToken, jwtPassword);
     if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: 'You are not authenticated',
      });
    }
  } catch (error) {
    res.json({
      msg: 'Invalid Input',
    });
  }
}

module.exports = adminMiddleware;
