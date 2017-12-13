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


  app.put('/member/:id', (req, res) => {
    knex('member')
      .where("id", req.params.id)
      .update({
        username: req.body.username,
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

  app.put('/memberidea/:ideaid', (req, res) => {
    knex('memberidea')
      .where('ideaid', req.params.ideaid)
      .update({
        memberid: req.body.memberid
      })
      .then(() => {
        knex.select()
          .from('memberidea')
          .then((data) => {
            res.send(data);
          })
      })
  });
}
