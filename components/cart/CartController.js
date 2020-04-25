const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const {addProductToCart,getCartDetails} = require('./CartService');

const verifyJWTToken = require('../auth/VerifyToken');



// -----------------------------------routes start ---------------------------------- //

// GETS A SINGLE USER FROM THE DATABASE
router.post('/addProductToCart',verifyJWTToken, addProductToCart);
router.get('/details',verifyJWTToken, getCartDetails);

// router.get('/get',verifyJWTToken, listCategory);




// -----------------------------------routes end ---------------------------------- //


module.exports = router;

