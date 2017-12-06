
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {title: 'Purchase',budgetLimit:5000.00,isActive:1},
        {title: 'Event',budgetLimit:250.50,isActive:0},
        {title: 'Trainning',budgetLimit:2000.20,isActive:1},
        {title: 'Work party',budgetLimit:1500.20,isActive:1},
        {title: 'Grocery',budgetLimit:3750.50,isActive:0},
        {title: 'Hardware',budgetLimit:17378.35,isActive:1},
      ]);
    });
};
