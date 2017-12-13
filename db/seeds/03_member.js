
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {username: 'pekka',email:'peku@gmail.com'},
        {username: 'alex',email:'alex@gmail.com'},
        {username: 'fired',email:'fired@gmail.com'},
        {username: 'alexandr',email:'alexandr@gmail.com'},
        {username: 'timothy',email:'timothy@gmail.com'},
        {username: 'rosa',email:'rosa@gmail.com'},
        {username: 'sander',email:'sander@gmail.com'},
      ]);
    });
};
