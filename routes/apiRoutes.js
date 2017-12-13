var knex = require('../db/knex');

module.exports = app => {
  app.get('/category', (req, res) => {
    knex.select()
      .from('category')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/category/:id', (req, res) => {
    knex.select()
      .from('category')
      .where('id', req.params.id)
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/idea', (req, res) => {
    knex.select()
      .from('idea')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/idea/:id', (req, res) => {
    knex.select()
      .from('idea')
      .where('id', req.params.id)
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/member', (req, res) => {
    knex.select()
      .from('member')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/member/:id', (req, res) => {
    knex.select()
      .from('member')
      .where('id', req.params.id)
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/memberidea', (req, res) => {
    knex.select()
      .from('memberidea')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/memberidea/:id', (req, res) => {
    knex.select()
      .from('memberidea')
      .where('id', req.params.id)
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/comment', (req, res) => {
    knex.select()
      .from('comment')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/comment/:memberid/:ideaid', (req, res) => {
    knex.select()
      .from('comment')
      .where('memberid', req.params.memberid)
      .where('ideaid', req.params.ideaid)
      .then((data) => {
        res.send(data);
      })
  })
}
