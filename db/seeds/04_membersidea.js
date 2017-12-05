
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memb').del()
    .then(function () {
      // Inserts seed entries
      return knex('memb').insert([
        {memberId:30,ideaId:20},
        {memberId:31,ideaId:21},
        {memberId:32,ideaId:22}
      ]);
    });
};
