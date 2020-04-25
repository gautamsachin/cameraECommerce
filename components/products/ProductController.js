const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const {createProduct, listProduct, getProductDetails} = require('./ProductService');

const verifyJWTToken = require('../auth/VerifyToken');



// -----------------------------------routes start ---------------------------------- //

// GETS A SINGLE USER FROM THE DATABASE
router.post('/create',verifyJWTToken, createProduct);
router.get('/list',verifyJWTToken, listProduct);
router.get('/details/:id',verifyJWTToken, getProductDetails);





// -----------------------------------routes end ---------------------------------- //


module.exports = router;

