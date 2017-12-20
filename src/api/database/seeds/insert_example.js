exports.seed = function(knex, Promise) {
  return knex("examples").insert([
    {id: 1, message: "I'm an example!"},
    {id: 2, message: "I'm also an example!"},
    {id: 3, message: "I'm an example too!"}
  ]);
};
