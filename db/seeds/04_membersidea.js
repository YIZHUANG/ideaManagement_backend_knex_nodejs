
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memb').del()
    .then(function () {
      // Inserts seed entries
      return knex('memb').insert([
        {memberId:1,ideaId:1},
        {memberId:2,ideaId:2},
        {memberId:3,ideaId:3}
      ]);
    });
};
