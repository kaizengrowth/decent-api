exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("examples", table => {
    table.increments("id").primary();
    table.string("message");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("examples");
};
