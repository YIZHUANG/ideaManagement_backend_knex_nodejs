var knex = require('../db/knex');

module.exports = app => {

  app.post('/category', (req, res) => { //insert data to table category, with a form in the client.
    knex('category')
      .insert({
        title: req.body.title,
        budgetLimit: req.body.budgetLimit,
        isActive: req.body.isActive
      })
      .then(() => {
        knex.select()
          .form(category)
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.post('/idea', (req, res) => { //insert data to table idea, with a form in the client.
    knex('idea')
      .insert({
        title: req.body.title,
        description: req.body.description,
        budget: req.body.budget,
        isReadyForComments: req.body.isReadyForComments,
        peopleNeeded: req.body.peopleNeeded,
        categoryId: req.body.categoryId
      })
      .then(() => {
        knex.select()
          .from('idea')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.post('/member', (req, res) => { //insert data to table member, with a form in the client.
    knex('member')
      .insert({
        userName: req.body.userName,
        email: req.body.userName
      })
      .then(() => {
        knex.select()
          .from('member')
          .then((data) => {
            res.send(data);
          })
      })
  })

  app.post('/memberidea', (req, res) => { //insert data to table memb, with a form in the client.
    knex('memb')
      .insert({
        memberId: req.body.memberId,
        ideaId: req.body.ideaId
      })
      .then(() => {
        knex.select()
          .from('memb')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.post('/comment', (req, res) => { //insert data to table comment, with a form in the client.
    knex('comment')
      .insert({
        memberId: req.body.memberId,
        ideaId: req.body.ideaId,
        commentLine: req.body.commentLine
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
