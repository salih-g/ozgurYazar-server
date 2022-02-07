const router = require('express').Router();

const { auth } = require('../../middleware/auth');
const {
	AdminControllerContents,
	AdminControllerSections,
} = require('./controllers');

router
	.route('/contents/new')
	.post(auth, AdminControllerContents.createNewContent);
router.route('/contents').get(auth, AdminControllerContents.getAll);
router.route('/contents/:id').get(auth, AdminControllerContents.getById);
router
	.route('/contents/:id')
	.patch(auth, AdminControllerContents.updateContent);
router
	.route('/contents/:id')
	.delete(auth, AdminControllerContents.deleteContent);

router
	.route('/contents/sections/:id')
	.post(auth, AdminControllerSections.createNewSection);

module.exports = router;
