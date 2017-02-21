// TOPICS controller - application logic - responsible for rendering final view

// require model - to access crud functions
const Topic = require('../../models/topic');
const Comments = require('../../models/comments');
const Subcomments = require('../../models/subcomments');

const controller = {};

controller.edit = (req, res) => {
  Topic
    .findById(req.params.id)
    .then(data => res.render('topics/edit', { topics: data[0] }))
    .catch(err => console.log('ERROR', err));
}

controller.index = (req, res) => {
  Topic
    .findAll()
    .then(data => res.render('topics/index', { topics:data }))
    .catch(err => console.log('ERROR:', err));
}

controller.new = (req, res) => {
  res.render('./topics/new');
}

controller.create = (req, res) => {
  console.log(req.body.topics);
  Topic
    .save(req.body.topics)
    .then(() => {
      res.redirect('/topics')
    })
    .catch(err => console.log('ERROR', err));
}

controller.commentLike = (req, res) => {
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

// controller.createSubComment = (req, res) => {
//   Subcomments
//     .createSubComment(req.body.subcomments, req.params.id)
//     .then(() => {
//       res.redirect(`/topics/${req.params.id}`);
//     })
//     .catch((err) => {
//       res
//       .status(400)
//       .send(err)
//     });
// }

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

controller.update = (req, res) => {
  Topic
    .update(req.body.topics, req.params.id)
    .then((data) => res.redirect(`/topics/${req.params.id}`))
    .catch(err => console.log('ERROR', err));
}

controller.destroy = (req, res) => {
  Topic
    .destroy(req.params.id)
    .then(() => res.redirect('/topics'))
    .catch(err => console.log('ERROR', err));
}

// controller.destroyComment = (req, res) => {
//   comment
//     .destroyComment(req.params.id)
//     .then(() => res.redirect('/topics'))
//     .catch(err => console.log('ERROR', err));
// }

module.exports = controller;
