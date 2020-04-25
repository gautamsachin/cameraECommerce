// name (string, like Nikon or Canon, not null)
// • type (string, can only be “Mirrorless”, “full frame”, “point and shoot”, not null)
// • model (int, year, like 2018, not null)


const mongoose = require('mongoose');  
const cartSchema = new mongoose.Schema({  
  userId: {type:String,unique:true},
  products:[String],
  createdOn: {
    type: Date,
    default: () => Date.now()
  }
}); 
let cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel