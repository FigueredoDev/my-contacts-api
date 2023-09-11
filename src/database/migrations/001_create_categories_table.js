exports.up = async function (knex) {
  const hasTable = await knex.schema.hasTable('categories');

  if (!hasTable) {
    return knex.schema.createTable('categories', function (table) {
      table.uuid('id').primary().notNullable();
      table.string('name', 255);
    });
  }
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('categories');
};
