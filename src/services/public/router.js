const router = require('express').Router();

const PublicController = require('./controllers');

router.route('/').get(PublicController.hello);
router.route('/contents').get(PublicController.getAllContents);
router.route('/contents/:id').get(PublicController.getById);

module.exports = router;
