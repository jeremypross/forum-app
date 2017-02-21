const db = require('../config/database');

const subcomment = {};

subcomment.findAllById = (id) => {
  return db.query(`
    SELECT * FROM Subcomments
    WHERE comment_id = $1`,
    [id]
  );
}

subcomment.createSubComment = (subcomment, id) => {
  return db.query(`
    INSERT INTO subcomments
    (username, subcomment, comment_id)
    VALUES
    ($1, $2, $3)`,
    [subcomment.username, subcomment.comment, id]
  );
}

module.exports = subcomment;
