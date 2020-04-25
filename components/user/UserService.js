
const bcrypt = require('bcryptjs');
const User = require('./UserModel');
let { sendSuccess, sendError } = require('../../util/responseHandler');




const createUser = async function (req, res) {

    try {

        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        user = user.toObject()
        delete user.password;
        return sendSuccess(req, res, {
            message: 'user register successfully',
            data: user
        })
    }
    catch (error) {
        console.log('error-->', error);
        return  sendError(req,res,{
            message: 'user not registered', error: error.message || ''
        })
    }
}

const findUser = async function (req, res) {

    try {

        console.log('inside find user method')
        console.log(User);
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (!!user) user = user.toObject();
        return user;
    }
    catch (error) {
        console.log('error-->', error);
        if (error) return res.status(500).send("There was a problem finding the user`.");

    }

}

const findUserById = async function (req, res) {

    try {

        console.log('inside find user by id');
        console.log('req params are', JSON.stringify(req.params));
        let _id = req.params.id
        let user = await User.findById({ _id });
        if (!!user) user = user.toObject();
        return res.status(200).send({ success: true, user });
    }
    catch (error) {
        console.log('error-->', error);
        if (error) return res.status(500).send({ success: false, message: "There was a problem finding the user`." });

    }

}

module.exports = {
    createUser,
    findUser,
    findUserById
}