const app = require('./app');
const port = process.env.PORT || 3000;
require('./init/db');
const path = require('path');
require('dotenv').config({ path: `${path.join(__dirname, 'config', '.env')}` });

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});