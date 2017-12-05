const express = require('express');

var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;
var knex=require('./db/knex');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/test',function(req,res){
  knex.raw('select * from member').then(function(data){
    res.send(data);
  })
})

app.listen(PORT,function(){
  console.log("running at port ", PORT);
});
