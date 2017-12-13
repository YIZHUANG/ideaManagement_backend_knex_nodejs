
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {memberid:1,ideaid:1,commentline:'Completely agree'},
        {memberid:2,ideaid:2,commentline:'that is wierd'},
        {memberid:3,ideaid:3,commentline:'No way'},
      ]);
    });
};
