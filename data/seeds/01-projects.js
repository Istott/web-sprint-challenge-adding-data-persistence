
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    { project_name: "Epic Veggie Garden" }, 
    { project_name: "Epic Hydroponics" }, 
    { project_name: "Epic Flower Garden" }, 
    // { project_name: "" }, 
    // { project_name: "" },

  ]);
};
