// name (string, like Nikon D850)
// • category (category it belongs to, for example “Nikon”)
// • description (string, product description)
// • price (decimal, like 20134.34)
// • make (int, year when it was built)

const mongoose = require('mongoose');  
const ProductSchema = new mongoose.Schema({  
  name: String,
  description:String,
  price:Number,
  make:Number,
  category: {
    name:String,
    id:String
  },
  createdOn: {
    type: Date,
    default: () => Date.now()
  }
}); 
let productModel = mongoose.model('Product', ProductSchema);
mongoose.model('User');
module.exports = productModel