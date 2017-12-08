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
      .from('memb')
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/memberidea', (req, res) => {
    knex.select()
      .from('memb')
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

  app.get('/comment/:memberId/:ideaId', (req, res) => {
    knex.select()
      .from('comment')
      .where('memberId', req.params.memberId)
      .where('ideaId', req.params.ideaId)
      .then((data) => {
        res.send(data);
      })
  })

  app.get('/listData',(req,res)=>{
    knex('idea').innerJoin('category','idea.categoryId','category.id')
    .innerJoin('memb','idea.id','memb.ideaId')
    .innerJoin('member','memb.memberId','member.id')
    .select('idea.title','idea.description','member.userName','idea.budget','idea.peopleNeeded','idea.isReadyForComments','category.name','idea.creationDate','idea.lastModified')
    .then((data)=>{
    res.send(data);
    })
  })

}
