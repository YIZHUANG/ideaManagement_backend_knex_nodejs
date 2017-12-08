
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {name: 'Purchase',budgetLimit:5000.00,isActive:1},
        {name: 'Event',budgetLimit:250.50,isActive:0},
        {name: 'Trainning',budgetLimit:2000.20,isActive:1},
        {name: 'Work party',budgetLimit:1500.20,isActive:1},
        {name: 'Grocery',budgetLimit:3750.50,isActive:0},
        {name: 'Hardware',budgetLimit:17378.35,isActive:1},
      ]);
    });
};
