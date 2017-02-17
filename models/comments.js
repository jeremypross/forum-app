const db = require('../config/database');

const comment = {};

comment.findAllById = (id) => {
  return db.query(`
    SELECT * FROM comments
    WHERE topic_id = $1`,
    [id]
  )
}

comment.createComment = (comment, id) => {
  return db.query(`
    INSERT INTO comments
    (username, comment, topic_id)
    VALUES
    ($1, $2, $3)`,
    [comment.username, comment.comment, id]
  );
}

module.exports = comment;
