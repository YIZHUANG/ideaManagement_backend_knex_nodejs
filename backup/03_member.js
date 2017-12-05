
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {id: 30, userName: 'pekka',email:'peku@gmail.com'},
        {id: 31, userName: 'alex',email:'alex@gmail.com'},
        {id: 32, userName: 'fired',email:'fired@gmail.com'}
      ]);
    });
};
