
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memberidea').del()
    .then(function () {
      // Inserts seed entries
      return knex('memberidea').insert([
        {memberid:1,ideaid:1},
        {memberid:2,ideaid:2},
        {memberid:3,ideaid:3},
        {memberid:4,ideaid:4},
        {memberid:5,ideaid:5},
        {memberid:6,ideaid:6},
        {memberid:7,ideaid:7},
        {memberid:7,ideaid:8},
        {memberid:7,ideaid:9}
      ]);
    });
};
