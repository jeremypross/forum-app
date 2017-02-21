// establish connection with db using pg promise
const pgp = require('pg-promise')();

// checks for database port or defers to localhost:5432
const db = pgp(process.env.DATABASE_URL || {
  host: 'localhost',
  port: 5432,
  database: 'forum_db'
});

module.exports = db;
