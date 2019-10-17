// Update with your config settings.
const path = require('path')

const defaults = {
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, '/migrations')
  }
}

const sqliteDefaults = Object.assign({
  client: 'sqlite3',
  useNullAsDefault: true,
  seeds: {
    directory: path.join(__dirname, '../../test/server/db/seeds')
  },
  pool: {
    afterCreate: (conn, cb) =>
      conn.run('PRAGMA foreign_keys = ON', cb)
  }
}, defaults)

const postgresDefaults = Object.assign({
  client: 'postgresql',
  pool: {
    min: 2,
    max: 10
  }
}, defaults)

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "db",
      user: "kimmi",
      password: "admin"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory: path.join(__dirname, '../../test/server/db/seeds')
    }
  },

  test: Object.assign({
    connection: {
      filename: ':memory:'
    }
  }, postgresDefaults),

  staging: Object.assign({
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    }
  }, postgresDefaults),

  production: Object.assign({
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: path.join(__dirname, '../../test/server/db/seeds')
    }
  }, postgresDefaults)
}

// development: {
//   client: "postgresql",
//   connection: {
//     database: "yourprojectname",
//     user: "yourprojectname",
//     password: "example"
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: "knex_migrations"
//   }
// },