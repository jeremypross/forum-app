// TOPICS
// app middleware looks for specific http verb
// will link to object in controller.js and run that function

const router = require('express').Router();
// link to controller.js
const controller = require('./controller');

// attach restful routes to controller object methods
router.get('/:id/edit', controller.edit);


router.put('/:id/like', controller.like);

router.put('/:id/:commentLike', controller.commentLike);

router.get('/new', controller.new);

router.get('/:id', controller.show);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

// router.delete('/:id', controller.destroyComment);

router.get('/', controller.index);

router.post('/new', controller.create);

router.post('/:id', controller.createComment);

module.exports = router;
