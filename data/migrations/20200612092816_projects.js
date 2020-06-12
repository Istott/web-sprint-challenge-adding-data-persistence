
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name', 128)
          .unique()
          .notNullable();
      })

      .createTable('resources', tbl => {
        tbl.increments();
        tbl.string("resource_name", 255).notNullable().index();
      })

      .createTable('tasks', tbl => {
        tbl.increments();

        tbl.integer('task_number')
            .unsigned()
            .notNullable();
        tbl.text('task_name')
            .notNullable();
        tbl
            .integer("project_id")
            .unsigned()
            .references("projects.id")
            .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
            .onUpdate("CASCADE");
        tbl
            .integer("resource_id")
            .unsigned()
            .references("resources.id")
            .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
            .onUpdate("CASCADE");
      });

  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };