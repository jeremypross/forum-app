// application logic - responsible for rendering final view

// require model - to access crud functions
const Topic = require('../../models/topic');

const controller = {};

controller.index = (req, res) => {
  Topic
    .findAll()
    .then(data => res.render('topics/index', { topics:data}))
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

controller.show = (req, res) => {
  Topic
    .findById(req.params.id)
    .then(data => res.render('topics/show', { topics: data }))
    .catch(err => console.log('ERROR', err));
}

controller.like = (req, res) => {
  Topic
    .like(req.params.id)
    .then(() => {
      res.redirect(`/topics/${req.params.id}`)
    })
    .catch(err => console.log('ERROR', err));
}

controller.update = (req, res) => {
  Topic
    .update(req.body.topics, req.params.id)
    .then(() => res.redirect('/topics'))
    .catch(err => console.log('ERROR', err));
}

controller.edit = (req, res) => {
  Topic
    .findById(req.params.id)
    .then(data => res.render('/topics/edit', {topics: data}))
    .catch(err => console.log('ERROR', err));
}

module.exports = controller;
