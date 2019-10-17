exports.seed = (knex, Promise) => {
  return knex('messages').insert([
    { id: 0, user_id: 3, message: 'whattup', timestamp: 1571281483 },
    { id: 1, user_id: 2, message: 'i am fractional_indicator9643', timestamp: 1571281483 },
    { id: 2, user_id: 0, message: 'super sleepy wbu', timestamp: 1571281483 },
    { id: 3, user_id: 1, message: 'liable_francises only', timestamp: 1571281483 },
  ])
}