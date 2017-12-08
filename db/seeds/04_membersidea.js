
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memb').del()
    .then(function () {
      // Inserts seed entries
      return knex('memb').insert([
        {memberId:1,ideaId:1},
        {memberId:2,ideaId:2},
        {memberId:3,ideaId:3},
        {memberId:4,ideaId:4},
        {memberId:5,ideaId:5},
        {memberId:6,ideaId:6},
        {memberId:7,ideaId:7},
        {memberId:7,ideaId:8},
        {memberId:7,ideaId:9}
      ]);
    });
};
