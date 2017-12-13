const express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;
var knex = require('./db/knex');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

require('./routes/featuresApi')(app);  // Routes use in the front end side, your main concern.
require('./routes/apiRoutes')(app);   //Not used in front-end, only for testing purposes with postman, and future usage.
require('./routes/insertData')(app);  //Not used in front-end, only for testing purposes with postman, and future usage.
require('./routes/updateData')(app);  //Not used in front-end, only for testing purposes with postman, and future usage.
require('./routes/deleteData')(app);  //Not used in front-end, only for testing purposes with postman, and future usage.

app.listen(PORT, function() {
  console.log("running at port ", PORT);
});
