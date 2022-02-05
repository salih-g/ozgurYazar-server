const { Content, Page, Section } = require('../../models/content.model');
const { Types } = require('mongoose');

const AdminController = {
	createNewSection: async (req, res) => {
		const { title, desc, published, sectionName } = req.body;
		const newPage = new Page({
			_id: new Types.ObjectId(),
			content: '',
		});
		const newSection = new Section({
			_id: new Types.ObjectId(),
			title: sectionName,
			published: false,
			pages: [newPage._id],
		});

		const newContent = new Content({
			_id: new Types.ObjectId(),
			title: title,
			desc: desc,
			published: published,
			sections: [newSection._id],
		});

		try {
			await newPage.save();
			await newSection.save();
			const content = await newContent.save();

			return res.status(201).json(content);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

module.exports = AdminController;
