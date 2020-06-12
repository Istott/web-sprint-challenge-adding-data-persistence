
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    { 
      project_id: 1, 
      task_number: 1,
      task_name: 'hoe the garden',
      resource_id: 1
    },
    { 
      project_id: 1, 
      task_number: 2,
      task_name: 'seed the garder',
      resource_id: 6
    },
    { 
      project_id: 1, 
      task_number: 3,
      task_name: 'water the garden',
      resource_id: 4
    },
    { 
      project_id: 1, 
      task_number: 4,
      task_name: 'setup trap for peter',
      resource_id: 5
    },
    // { 
    //   project_id: 2, 
    //   task_number: 1,
    //   task_name: 'cultivate seedlings',
    //   resource_id: 6
    // },
    // { 
    //   project_id: 2, 
    //   task_number: 2,
    //   task_name: 'secure sprouts in hydroponics container, let hyrdroponics do the rest',
    //   resource_id: 4
    // },
    // { 
    //   project_id: 3, 
    //   task_number: 1,
    //   task_name: 'hoe flower bed',
    //   resource_id: 1
    // },
    // { 
    //   project_id: 3, 
    //   task_number: 2,
    //   task_name: 'plants flower seeds',
    //   resource_id: 6
    // },
    // { 
    //   project_id: 3, 
    //   task_number: 3,
    //   task_name: 'water the flower garden',
    //   resource_id: 4
    // },

  ]);
};
