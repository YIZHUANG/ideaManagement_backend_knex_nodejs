const express = require('express');

var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;
var knex=require('./db/knex');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/category',function(req,res){
  knex.raw('select * from category').then(function(data){
    res.send(data.rows);
  })
})
app.get('/idea',function(req,res){
  knex.raw('select * from idea').then(function(data){
    res.send(data.rows);
  })
})

app.get('/member',function(req,res){
  knex.raw('select * from member').then(function(data){
    res.send(data.rows);
  })
})

app.get('/memberidea',function(req,res){
  knex.raw('select * from memb').then(function(data){
    res.send(data.rows);
  })
})

app.get('/comment',function(req,res){
  knex.raw('select * from comment').then(function(data){
    res.send(data.rows);
  })
})


app.listen(PORT,function(){
  console.log("running at port ", PORT);
});
