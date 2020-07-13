const jwt = require('jsonwebtoken');
const keys = require('../config/key');

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(bearerHeader !== 'undefined') {     
      req.token = bearerHeader;

      jwt.verify(req.token, keys.jwt.secret, (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          res.user = authData;
          next();
        }
      });

      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }  
  }

  module.exports = (verifyToken);