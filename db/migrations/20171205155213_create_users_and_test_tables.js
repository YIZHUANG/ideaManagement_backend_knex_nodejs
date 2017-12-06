
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category',function(table){
    table.increments();
    table.string('title').notNullable();
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
    table.integer('categoryId').references('id').inTable('category');
  })

  .createTable('member',function(table){
    table.increments();
    table.string('userName').notNullable();
    table.string('email').notNullable();
  })

  .createTable('memb',function(table){
    table.integer('memberId').references('id').inTable('member');
    table.integer('ideaId').references('id').inTable('idea');
  })

  .createTable('comment',function(table){
    table.integer('memberId').references('id').inTable('member');
    table.integer('ideaId').references('id').inTable('idea');
    table.timestamp('commentTimeStamp').defaultTo(knex.fn.now());
    table.string('commentLine').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment').dropTable('memb').dropTable('member').dropTable('idea').dropTable('category');
};
