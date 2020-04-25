const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../../config'); // get our config file

let verifyToken = async function (req, res, next) {


  try {
  // check header or url parameters or post parameters for token
  const token = req.headers['access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
   let user = await jwt.verify(token, config.secret);      

    // if everything is good, save to request for use in other routes
    req.userId = user.id;
    next(null)

  } catch (error) {
    
    if (error) 
    return res.status(500).send({success:false, auth: false, message: 'Failed to authenticate token.' });    

  }


}

module.exports = verifyToken;