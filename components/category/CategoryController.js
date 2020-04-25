const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const {createCategory,listCategory} = require('./CategoryService');

const verifyJWTToken = require('../auth/VerifyToken');



// -----------------------------------routes start ---------------------------------- //

// GETS A SINGLE USER FROM THE DATABASE
router.post('/create',verifyJWTToken, createCategory);
router.get('/list',verifyJWTToken, listCategory);




// -----------------------------------routes end ---------------------------------- //


module.exports = router;

