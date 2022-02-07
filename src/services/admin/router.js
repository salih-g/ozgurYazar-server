const router = require('express').Router();

const { auth } = require('../../middleware/auth');
const { ContentControllers, SectionControllers } = require('./controllers');

router.route('/contents/new').post(auth, ContentControllers.createNewContent);
router.route('/contents').get(auth, ContentControllers.getAll);
router.route('/contents/:id').get(auth, ContentControllers.getById);
router.route('/contents/:id').patch(auth, ContentControllers.updateContent);
router.route('/contents/:id').delete(auth, ContentControllers.deleteContent);

router
	.route('/contents/sections/:id')
	.post(auth, SectionControllers.createNewSection);
router
	.route('/contents/sections/:id')
	.get(auth, SectionControllers.getSectionById);

module.exports = router;
