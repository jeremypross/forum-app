// COMMENTS
// app middleware looks for specific http verb
// will link to object in comments/controller.js and run that function
const router = require('express').Router();
// link to controller.js
const controller = require('./controller');

// router.get('/:id/edit', controller.edit);

// router.put('/:id/like', controller.like);
//
// router.get('/new', controller.new);
//
// router.get('/:id', controller.show);
//
// router.put('/:id', controller.update);
//
// router.delete('/:id', controller.destroy);
//
// router.post('/new', controller.create);

module.exports = router;
