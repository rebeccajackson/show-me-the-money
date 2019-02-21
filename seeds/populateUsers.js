const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'symesharr', first_name: 'Harrison', last_name: 'Symes', hash: hashSync('Krang', saltRounds), hourly_wage: 300},
        {id: 2, user_name: null, first_name: 'Curious', last_name: 'George', hash: null, hourly_wage: 10.5},
        {id: 3, user_name: null, first_name: 'Micheal', last_name: 'Stevens', hash: null, hourly_wage: 40},
        {id: 4, user_name: null, first_name: 'Dwight', last_name: 'Schrute', hash: null, hourly_wage: 5},
        {id: 5, user_name: null, first_name: 'Graham', last_name: 'Colin', hash: null, hourly_wage: 17.25},
        {id: 6, user_name: null, first_name: 'Roxanne', last_name: 'Roxannu', hash: null, hourly_wage: 100},
        {id: 7, user_name: null, first_name: 'Anita', last_name: 'Mann', hash: null, hourly_wage: 100},
        {id: 8, user_name: null, first_name: 'Catherine', last_name: 'Graham', hash: null, hourly_wage: 18},
        {id: 9, user_name: null, first_name: 'Jimmy', last_name: 'Burns', hash: null, hourly_wage: 15},
        {id: 10, user_name: null, first_name: 'Ralph', last_name: 'Wiggum', hash: null, hourly_wage: 0.25},
        {id: 11, user_name: null, first_name: 'fiddy', last_name: 'cent', hash: null, hourly_wage: 0.5},
        {id: 12, user_name: null, first_name: 'Lochness', last_name: 'Monster', hash: null, hourly_wage: 5}
      ]);
    });
};
