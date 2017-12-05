
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {memberId:30,ideaId:20,commentLine:'Completely agree'},
        {memberId:31,ideaId:21,commentLine:'Completely agree'},
        {memberId:32,ideaId:22,commentLine:'Completely agree'}
      ]);
    });
};
