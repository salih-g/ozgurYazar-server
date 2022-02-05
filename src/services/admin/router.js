const router = require('express').Router();

const AdminController = require('./controllers');

router.route('/contents').get(AdminController.getAll);
router.route('/contents/:id').get(AdminController.getById);
router.route('/contents/new').post(AdminController.createNewSection);

module.exports = router;
