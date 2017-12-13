var knex = require('../db/knex');

module.exports = (app) => {

  app.post('/category', (req, res) => { //insert data to table category, with a form in the client.
    knex('category')
      .insert({
        name: req.body.name,
        budgetLimit: req.body.budgetLimit,
        isActive: req.body.isActive
      })
      .then(() => {
        knex.select()
          .from('category')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.post('/member', (req, res) => { //insert data to table member, with a form in the client.
    knex('member')
      .insert({
        username: req.body.username,
        email: req.body.username
      })
      .then(() => {
        knex.select()
          .from('member')
          .then((data) => {
            res.send(data);
          })
      })
  })

  app.post('/memberidea/:id', (req, res) => { //insert data to table memb, with a form in the client.
    knex('memberidea')
      .insert({
        memberid: req.body.memberid,
        ideaid: req.params.id
      })
      .then(() => {
        knex.select()
          .from('memberidea')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.post('/comment', (req, res) => { //insert data to table comment, with a form in the client.
    knex('comment')
      .insert({
        memberid: req.body.memberid,
        ideaid: req.body.ideaid,
        commentline: req.body.commentline
      })
      .then(() => {
        knex.select()
          .from('comment')
          .then((data) => {
            res.send(data);
          })
      })
  });
}
