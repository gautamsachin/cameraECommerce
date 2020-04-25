// name (string, like Nikon or Canon, not null)
// • type (string, can only be “Mirrorless”, “full frame”, “point and shoot”, not null)
// • model (int, year, like 2018, not null)


const mongoose = require('mongoose');  
const CategorySchema = new mongoose.Schema({  
  name: String,
  model:Number,
  type: String,
  createdOn: {
    type: Date,
    default: () => Date.now()
  }
}); 
let categoryModel = mongoose.model('Category', CategorySchema);
module.exports = categoryModel