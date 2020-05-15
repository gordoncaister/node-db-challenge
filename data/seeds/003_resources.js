
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: "Computer",
          resource_description: "My desktop PC",
        },{
          resource_name: "Hammer",
          resource_description: ""
        },{
          resource_name: "Circle Saw",
          resource_description: ""
        },{
          resource_name: "Staple Gun",
          resource_description: "To fix the cover"
        },{
          resource_name: "Wrenches",
          resource_description: "Rest of the world calls them spanners"
        },{
          resource_name: "Helmet",
          resource_description: "Don't use your head, wear a helmet"
        },
      ]);
    });
};
