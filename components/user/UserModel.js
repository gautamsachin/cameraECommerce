const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  name: String,
  email: {type:String,unique:true},
  password: String,
  createdOn: {
    type: Date,
    default: () => Date.now()
  }
});
let user = mongoose.model('User', UserSchema);

module.exports = user