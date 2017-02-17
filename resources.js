const router  = require('express').Router();

// map route URLs
router.use('/topics', require('./controllers/topics'));

router.use('/comments', require('./controllers/comments'));

module.exports = router;
