const router = require('express').Router();

const { createNewSection } = require('./controllers');

router.route('/contents/new').post(createNewSection);

module.exports = router;
