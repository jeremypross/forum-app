// app middleware looks for specific http verb
// will link to object in controller.js and run that function
const router = require('express').Router();
// link to controller.js
const controller = require('./controller');

router.get('/', controller.index);
router.get('/new', controller.new);

module.exports = router;
