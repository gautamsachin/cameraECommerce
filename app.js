const express = require('express');
const app = express();

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

const UserController = require('./components/user/UserController');
app.use('/api/users', UserController);

const AuthController = require('./components/auth/AuthController');
app.use('/api/auth', AuthController);


const ProductController = require('./components/products/ProductController');
app.use('/api/product', ProductController);

const CartController = require('./components/cart/CartController');
app.use('/api/cart', CartController);

const CategoryController = require('./components/category/CategoryController');
app.use('/api/category', CategoryController);

module.exports = app;