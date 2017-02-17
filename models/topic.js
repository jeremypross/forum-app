const db = require('../config/database');

let Topic = {};

Topic.findAll = () => {
  return db.query(`
    SELECT *
    FROM topics
    ORDER BY topic_votes DESC`
  );
}

module.exports = Topic;
