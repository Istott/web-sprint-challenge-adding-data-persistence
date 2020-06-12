
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { resource_name: "garden hoe" }, 
    { resource_name: "garden rake" }, 
    { resource_name: "small shovel" }, 
    { resource_name: "water pot" }, 
    { resource_name: "rabbit trap" }, 
    { resource_name: "seeds" }, 
  ]);
};
