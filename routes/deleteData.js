var knex = require('../db/knex');

module.exports = app => {
  app.delete('/category/:id', (req, res) => {
    knex('category')
      .where('id', req.params.id)
      .del()
      .then(() => {
        knex.select()
          .from('category')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.delete('/member/:id', (req, res) => {
    knex('member')
      .where('id', req.params.id)
      .del()
      .then(() => {
        knex.select()
          .from('member')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.delete('/memberidea/:memberid/:ideaid', (req, res) => {
    knex('memberidea')
      .where('memberid', req.params.memberid)
      .where('ideaid', req.params.ideaid)
      .del()
      .then(() => {
        knex.select()
          .from('memberidea')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.delete('/comment/:memberid/:ideaid', (req, res) => {
    knex('comment')
      .where('memberid', req.params.memberid)
      .where('ideaid', req.params.ideaid)
      .del()
      .then(() => {
        knex.select()
          .from('comment')
          .then((data) => {
            res.send(data);
          })
      })
  });

}
