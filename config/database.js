// establish connection with db using pg promise
const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'forum_db'
});

module.exports = db;
