module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      directory: "./src/api/database/migratons"
    },
    seeds: {
      directory: "./src/api/database/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/api/database/migratons"
    },
    seeds: {
      directory: "./src/api/database/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/api/database/migratons"
    },
    seeds: {
      directory: "./src/api/database/seeds"
    }
  }
};
