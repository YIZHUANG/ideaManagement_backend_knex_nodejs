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

app.get('/category', function(req, res) {
  knex.raw('select * from category')
    .then(function(data) {
      res.send(data.rows);
    })
})

app.get('/idea', function(req, res) {
  knex.raw('select * from idea')
    .then(function(data) {
      res.send(data.rows);
    })
})

app.get('/member', function(req, res) {
  knex.raw('select * from member')
    .then(function(data) {
      res.send(data.rows);
    })
})

app.get('/memberidea', function(req, res) {
  knex.raw('select * from memb')
    .then(function(data) {
      res.send(data.rows);
    })
})

app.get('/comment', function(req, res) {
  knex.raw('select * from comment')
    .then(function(data) {
      res.send(data.rows);
    })
})

app.post('/memberidea', function(req, res) {
  knex('memb')
    .insert({
      memberId: req.body.memberId,
      ideaId: req.body.ideaId
    })
    .then(function() {
      knex.select()
        .from('memb')
        .then(function(data) {
          res.send(data);
        })
    })
})

app.post('/comment', function(req, res) {
  knex('comment')
    .insert({
      memberId: req.body.memberId,
      ideaId: req.body.ideaId,
      commentLine: req.body.commentLine
    })
    .then(function() {
      knex.select()
        .from('comment')
        .then(function(data) {
          res.send(data);
        })
    })
})

app.listen(PORT, function() {
  console.log("running at port ", PORT);
});
