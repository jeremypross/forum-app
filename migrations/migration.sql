DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS comments;

CREATE TABLE topics (
  id BIGSERIAL PRIMARY KEY,
  topic_votes INTEGER DEFAULT 0,
  title VARCHAR(255),
  content TEXT,
  username VARCHAR(255) DEFAULT 'anonymous'
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  comment_votes INTEGER DEFAULT 0,
  username VARCHAR(255),
  comment TEXT,
  topic_id BIGSERIAL REFERENCES topics(id)
);
