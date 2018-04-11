exports.seed = (knex, Promise) => {
    return knex('messages').insert([   
    {id: 0, user_id: 3, message: 'whattup', timestamp: '11/04/2018 16:24:11'},
    {id: 1, user_id: 2, message: 'i am fractional_indicator9643', timestamp: '10/04/2018 08:34:22'},
    {id: 2, user_id: 0, message: 'super sleepy wbu', timestamp: '22/03/2018 18:32:10'},
    {id: 3, user_id: 1, message: 'liable_francises only', timestamp: '08/03/2018 10:11:10'},
    ])
  }