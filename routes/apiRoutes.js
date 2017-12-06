var knex = require('../db/knex');

module.exports = app => {
  app.get('/category', (req, res) => {
    knex.raw('select * from category')
      .then((data) => {
        res.send(data.rows);
      })
  })

  app.get('/idea', (req, res) => {
    knex.raw('select * from idea')
      .then((data) => {
        res.send(data.rows);
      })
  })

  app.get('/member', (req, res) => {
    knex.raw('select * from member')
      .then((data) => {
        res.send(data.rows);
      })
  })

  app.get('/memberidea', (req, res) => {
    knex.raw('select * from memb')
      .then((data) => {
        res.send(data.rows);
      })
  })

  app.get('/comment', (req, res) => {
    knex.raw('select * from comment')
      .then((data) => {
        res.send(data.rows);
      })
  })
}
