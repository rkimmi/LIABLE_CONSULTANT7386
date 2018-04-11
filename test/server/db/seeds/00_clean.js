exports.seed = (knex, Promise) => {
    const empty = table => () => knex(table).del()
    return empty('messages')()
      .then(empty('users'))
  }