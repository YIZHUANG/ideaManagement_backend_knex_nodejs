
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {memberId:1,ideaId:1,commentLine:'Completely agree'},
        {memberId:2,ideaId:2,commentLine:'that is wierd'},
        {memberId:3,ideaId:3,commentLine:'No way'},
      ]);
    });
};
