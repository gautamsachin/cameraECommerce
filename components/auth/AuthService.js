let { findUser } = require('../user/UserService');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let { sendSuccess, sendError } = require('../../util/responseHandler');




let login = async function (req, res) {

    try {

        let email = req.body.email;
        if (!email) throw Error('email is required');
        let user = await findUser(req);
        if (!user) throw Error('No user found with given email');

        // check if the password is valid
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return sendError(req,res,{
            code : 401,
            message : 'login failed',
        })

        // if user is found and password is valid
        // create a token
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        // return the information including token as JSON
        return sendSuccess(req,res,{
            code: 200,
            data:{token},
            message:'login successful'
        })

} catch (error) {
    console.log(error);
    return sendError(req,res,{ error,message:'login failed',code:401})

}
  
  
  }
module.exports = {
    login
}