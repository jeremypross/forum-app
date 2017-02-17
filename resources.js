const router  = require('express').Router();

// map route URLs
router.use('/', require('./controllers/topics'));
router.use('/show', require('./controllers/comments'));

module.exports = router;
