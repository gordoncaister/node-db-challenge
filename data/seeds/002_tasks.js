
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: "Set up files",
          task_notes: "Init npm, knex, install dependencies, set up data folder etc",
          task_status: true,
          project_id: 1
        },
        {
          task_description: "Create seeds and migrations",
          task_notes: "Use knex seeds and migrations to create table and starter data",
          task_status: false,
          project_id: 1
        },
        {
          task_description: "Set up endpoints",
          task_notes: "Use express to create endpoints accessible by either an app or postman",
          task_status: false,
          project_id: 1
        },
        {
          task_description: "Bend Spring steel",
          task_notes: "",
          task_status: false,
          project_id: 2
        },
        {
          task_description: "Repair wood",
          task_notes: "wood frame is splintered, needs to be replaced",
          task_status: false,
          project_id: 2
        },
        {
          task_description: "Re-Cover",
          task_notes: "Need to replace the cover",
          task_status: false,
          project_id: 2
        },
        {
          task_description: "Find a frame",
          task_notes: "Specialised xc pro 2004",
          task_status: true,
          project_id: 1
        },
        {
          task_description: "Install parts",
          task_notes: "",
          task_status: true,
          project_id: 1
        },
        {
          task_description: "Don't crash",
          task_notes: "",
          task_status: false,
          project_id: 1
        },
      ]);
    });
};
