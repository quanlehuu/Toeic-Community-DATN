
const config = require("config"); 
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');

const  verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      
      jwt.verify(bearerToken, config.get("secret"), (err, authData) => {
        if(err) {
          res.json({"success" : false});
        } else {
            const decoded = jwt_decode(bearerToken);
            req.id = decoded.id;
            req.name = decoded.name;
            next();
        }
      });
    } else {
      // Forbidden
      res.json({"success" : false});
    }
  
}
module.exports = verifyToken;