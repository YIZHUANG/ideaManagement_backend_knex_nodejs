
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category',function(table){
    table.increments();
    table.string('name').notNullable();
    table.decimal('budgetLimit');
    table.boolean('isActive').notNullable();
  })

  .createTable('idea',function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('budget');
    table.boolean('isReadyForComments').notNullable();
    table.integer('peopleNeeded');
    table.timestamp('creationDate').defaultTo(knex.fn.now());
    table.timestamp('lastModified').defaultTo(knex.fn.now());
    table.integer('categoryid').references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
  })

  .createTable('member',function(table){
    table.increments();
    table.string('username').notNullable();
    table.string('email').notNullable();
  })

  .createTable('memberidea',function(table){
    table.integer('memberid').references('id').inTable('member').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('ideaid').references('id').inTable('idea').onUpdate('CASCADE').onDelete('CASCADE');
  })

  .createTable('comment',function(table){
    table.integer('memberid');
    table.integer('ideaid').references('id').inTable('idea').onDelete('CASCADE');
    table.timestamp('commenttimestamp').defaultTo(knex.fn.now());
    table.string('commentline').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment').dropTableIfExists('memberidea').dropTableIfExists('member').dropTableIfExists('idea').dropTableIfExists('category');
};
