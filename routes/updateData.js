var knex = require('../db/knex');

module.exports = app => {
  app.put('/category/:id', (req, res) => {
    knex('category')
      .where("id", req.params.id)
      .update({
        title: req.body.title,
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

  app.put('/idea/:id', (req, res) => {
    knex('idea')
      .where("id", req.params.id)
      .update({
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

  app.put('/member/:id', (req, res) => {
    knex('member')
      .where("id", req.params.id)
      .update({
        userName: req.body.userName,
        email: req.body.email
      })
      .then(() => {
        knex.select()
          .from('member')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.put('/memberidea/:memberId/:ideaId', (req, res) => {
    knex('memb')
      .where('memberId', req.params.memberId)
      .where('ideaId', req.params.ideaId)
      .update({
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

  app.put('/comment/:memberId/:ideaId', (req, res) => {
    knex('comment')
      .where('memberId', req.params.memberId)
      .where('ideaId', req.params.ideaId)
      .update({
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
