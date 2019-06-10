/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';  

const withAuth = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization ||
    req.cookies.token;

  
  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized: Invalid token'
        });
      } else {
        req.email = decoded.email;
        req._id = decoded._id;
        next();
      }
    });
  }
};

module.exports = withAuth;