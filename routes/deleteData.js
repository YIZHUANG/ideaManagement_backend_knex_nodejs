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

  app.delete('/idea/:id', (req, res) => {
    knex('idea')
      .where('id', req.params.id)
      .del()
      .then(() => {
        knex.select()
          .from('idea')
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

  app.delete('/memberidea/:memberId/:ideaId', (req, res) => {
    knex('memb')
      .where('memberId', req.params.memberId)
      .where('ideaId', req.params.ideaId)
      .del()
      .then(() => {
        knex.select()
          .from('memb')
          .then((data) => {
            res.send(data);
          })
      })
  });

  app.delete('/comment/:memberId/:ideaId', (req, res) => {
    knex('comment')
      .where('memberId', req.params.memberId)
      .where('ideaId', req.params.ideaId)
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
