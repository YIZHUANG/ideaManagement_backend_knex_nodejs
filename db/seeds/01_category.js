
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, title: 'Purchase',budgetLimit:5000.00,isActive:1},
        {id: 2, title: 'Event',budgetLimit:250.50,isActive:0},
        {id: 3, title: 'Trainning',budgetLimit:2000.20,isActive:1},
      ]);
    });
};
