exports.up = function(knex) {
    return knex.schema
    .createTable("projects",t=>{
        t.increments("project_id");
        t.string("project_name", 255).notNullable();
        t.text("project_description")
        t.boolean("project_status", false).notNullable();
    })
    .createTable("tasks",t=>{
        t.increments("task_id");
        t.text("task_description").notNullable();
        t.text("task_notes")
        t.boolean("task_status",false).notNullable
        t.integer("project_id").unsigned().notNullable()
        .references("projects.project_id")
    })
    .createTable("resource",t=>{
        t.increments("resource_id");
        t.string("resource_name", 255).notNullable();
        t.text("resource_description")
        
    })
    .createTable("project_resource",t=>{
        t.increments("project_resource_id");
        t.integer("project_id").unsigned().notNullable()
            .references("projects.project_id")
        t.integer("resource_id").unsigned().notNullable()
            .references("resources.resource_id")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
