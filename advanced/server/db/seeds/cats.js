exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Kiki', color: 'blue'},
        {id: 2, name: 'Mia', color: 'green'},
        {id: 3, name: 'Lian', color: 'white'}
      ]);
    });
};
