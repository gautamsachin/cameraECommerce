const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
const {findUser,findUserById} = require('./UserService');



// -----------------------------------routes start ---------------------------------- //

// GETS A SINGLE USER FROM THE DATABASE
router.get('/find/:id', findUserById);



// -----------------------------------routes end ---------------------------------- //


module.exports = router;

