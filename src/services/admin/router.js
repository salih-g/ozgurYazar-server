const router = require('express').Router();

const { auth } = require('../../middleware/auth');
const AdminController = require('./controllers');

router.route('/contents').get(auth, AdminController.getAll);
router.route('/contents/:id').get(auth, AdminController.getById);
router.route('/contents/new').post(auth, AdminController.createNewSection);
router.route('/contents/:id').delete(auth, AdminController.deleteContent);

module.exports = router;
