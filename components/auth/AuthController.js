const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {createUser} = require('../user/UserService');
const {login} = require('../auth/AuthService');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());




// -----------------------------------routes start ---------------------------------- //

router.post('/register', createUser);
router.post('/login',login);
router.get('/logout', function(req, res) { res.status(200).send({ auth: false, token: null });});
// router.get('/me', VerifyToken, function(req, res, next) {

//   User.findById(req.userId, { password: 0 }, function (err, user) {
//     if (err) return res.status(500).send("There was a problem finding the user.");
//     if (!user) return res.status(404).send("No user found.");
//     res.status(200).send(user);
//   });

// });

module.exports = router;


// -----------------------------------routes end ---------------------------------- //
