// TOPICS controller - application logic - responsible for rendering final view

// require models - to access crud functions
const Topic = require('../../models/topic');
const Comments = require('../../models/comments');

// store empty object to assign methods inside
const controller = {};

// edit topic function
controller.edit = (req, res) => {
  Topic
    .findById(req.params.id)
    .then(data => res.render('topics/edit', { topics: data[0] }))
    .catch(err => console.log('ERROR', err));
}

// index function - find all
controller.index = (req, res) => {
  Topic
    .findAll()
    .then(data => res.render('topics/index', { topics:data }))
    .catch(err => console.log('ERROR:', err));
}

// render new page
controller.new = (req, res) => {
  res.render('./topics/new');
}

// create topic
controller.create = (req, res) => {
  console.log(req.body.topics);
  Topic
    .save(req.body.topics)
    .then(() => {
      res.redirect('/topics')
    })
    .catch(err => console.log('ERROR', err));
}

// like a comment
controller.commentLike = (req, res) => {
  // modify req.params object for likes
  Comments
  .commentLike(req.params.commentLike)
  .then(() => {
    res.redirect(`/topics/${req.params.id}`)
  })
  .catch((err) => {
    res
    .status(400)
    .send(err)
  });
}

// create comment
controller.createComment = (req, res) => {
  Comments
  .createComment(req.body.comments, req.params.id)
  .then(() => {
    res.redirect(`/topics/${req.params.id}`);
  })
  Topic
  .allComments(req.params.id)
  .catch((err) => {
    res
    .status(400)
    .send(err)
  });
}

// display the topic and all related comments in show.ejs
controller.show = (req, res) => {
  Topic
    .findById(req.params.id)
    .then((data) => {
      Comments
      .findAllById(req.params.id)
      .then((comments) => {
        res.render('topics/show', {
          topics: data[0],
          comments: comments
        });
      })
    .catch((err) => {
      res
      .status(400)
      .send(err);
    });
  });
}

// topic likes
controller.like = (req, res) => {
  Topic
    .like(req.params.id)
    .then(() => {
      if (req.query.show) {
        res.redirect(`/topics/${req.params.id}`)
      } else {
        res.redirect('/topics')
      }
    })
    .catch(err => console.log('ERROR', err));
}

// edit topic
controller.update = (req, res) => {
  Topic
    .update(req.body.topics, req.params.id)
    .then((data) => res.redirect(`/topics/${req.params.id}`))
    .catch(err => console.log('ERROR', err));
}

// delete topic
controller.destroy = (req, res) => {
  Topic
    .destroy(req.params.id)
    .then(() => res.redirect('/topics'))
    .catch(err => console.log('ERROR', err));
}

module.exports = controller;
