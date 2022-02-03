const router = require('express').Router();

const { hello } = require('./controllers');

router.route('/').get(hello);

module.exports = router;
