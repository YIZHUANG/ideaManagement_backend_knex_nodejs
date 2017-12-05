
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('idea').del()
    .then(function () {
      // Inserts seed entries
      return knex('idea').insert([
        {id: 20, title: 'B-day party',description:'Biry party for collegues from work',budget:557.00,isReadyForComments:1,peopleNeeded:9,categoryId:1},
        {id: 21, title: 'party',description:'Biray party for collegues from work',budget:557.00,isReadyForComments:1,peopleNeeded:9,categoryId:2},
        {id: 22, title: 'party fuk',description:'Birthday party for collegues from work',budget:557.00,isReadyForComments:1,peopleNeeded:9,categoryId:3},
      ]);
    });
};
