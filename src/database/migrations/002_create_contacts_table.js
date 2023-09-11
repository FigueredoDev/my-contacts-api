exports.up = async function (knex) {
  const hasTable = await knex.schema.hasTable('contacts');

  if (!hasTable) {
    return knex.schema.createTable('contacts', function (table) {
      table.uuid('id').primary().notNullable();
      table.string('name', 255).notNullable();
      table.string('email', 255).unique();
      table.string('phone', 255);
      table.uuid('category_id').references('id').inTable('categories');
    });
  }
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('contacts');
};
