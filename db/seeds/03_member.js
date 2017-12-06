
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {userName: 'pekka',email:'peku@gmail.com'},
        {userName: 'alex',email:'alex@gmail.com'},
        {userName: 'fired',email:'fired@gmail.com'},
        {userName: 'alexandr',email:'alexandr@gmail.com'},
        {userName: 'timothy',email:'timothy@gmail.com'},
        {userName: 'rosa',email:'rosa@gmail.com'},
        {userName: 'sander',email:'sander@gmail.com'},
      ]);
    });
};
