const router  = require('express').Router();

// map route URLs
router.use('/topics', require('./controllers/topics'));

module.exports = router;
