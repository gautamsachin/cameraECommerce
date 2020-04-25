let  mongoose = require('mongoose');
mongoose.Promise = Promise
mongoose.connect('mongodb://127.0.0.1:27017/camera', { useMongoClient: true });

let conn = mongoose.connection;

conn.once('open', function ()
{
    console.log("Mongoose connection open-");
});