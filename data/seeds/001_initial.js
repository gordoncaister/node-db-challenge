
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: "Node DB Data Persistence",
          project_description:"Sprint challenge for Node API Data Persistence",
          completed: false
        },
        {
          project_name: "Fix bed box spring",
          project_description:"Spring steel in box spring is bent due to jumping on bed, needs to be rebent and wood replaced",
          completed: false
        },
        {
          project_name: "Build Bicycle",
          project_description:"Buy parts and build a bicycle",
          completed: true
        }
      ]);
    });
};
