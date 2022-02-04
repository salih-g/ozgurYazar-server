const router = require('express').Router();

const { hello, getAllContents } = require('./controllers');

router.route('/').get(hello);
router.route('/contents').get(getAllContents);

module.exports = router;
