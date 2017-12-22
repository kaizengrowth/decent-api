exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("examples", table => {
    table.increments("id").primary();
    table.string("message");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("examples");
};
