-- schema to create db tables

-- DROP TABLE IF EXISTS topics;
-- DROP TABLE IF EXISTS comments;

CREATE TABLE topics (
  id BIGSERIAL PRIMARY KEY,
  topic_votes INTEGER DEFAULT 0,
  title VARCHAR(255),
  content TEXT,
  comments INTEGER DEFAULT 0,
  username VARCHAR(255) DEFAULT 'anonymous'
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  comment_votes INTEGER DEFAULT 0,
  username VARCHAR(255) DEFAULT 'anonymous',
  comment TEXT,
  topic_id BIGSERIAL REFERENCES topics(id) ON DELETE CASCADE
);
