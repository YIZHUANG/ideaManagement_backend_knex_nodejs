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




require('./routes/apiRoutes')(app);   //routes for displaying a list of data.
require('./routes/insertData')(app);  //routes adding new data.
require('./routes/updateData')(app);  //routes for editting data.
require('./routes/deleteData')(app);  //routes for deleting data.
app.listen(PORT, function() {
  console.log("running at port ", PORT);
});
