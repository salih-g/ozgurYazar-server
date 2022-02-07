const router = require('express').Router();

const { auth } = require('../../middleware/auth');
const {
	ContentControllers,
	SectionControllers,
	PageControllers,
} = require('./controllers');

router.route('/contents').post(auth, ContentControllers.createNewContent);
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
router
	.route('/contents/sections/:id')
	.delete(auth, SectionControllers.deleteSection);
router
	.route('/contents/sections/:id')
	.patch(auth, SectionControllers.updateSection);

router.route('/contents/pages/:id').post(auth, PageControllers.createNewPage);
router.route('/contents/pages/:id').get(auth, PageControllers.getPageById);
router.route('/contents/pages/:id').patch(auth, PageControllers.updatePage);
router.route('/contents/pages/:id').delete(auth, PageControllers.deletePage);

module.exports = router;
