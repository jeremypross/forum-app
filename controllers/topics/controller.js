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
  res.render('./new');
}


module.exports = controller;
