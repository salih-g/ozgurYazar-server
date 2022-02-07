const { Content, Page, Section } = require('../../models/content.model');
const { Types } = require('mongoose');

const AdminControllerContents = {
	createNewContent: async (req, res) => {
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

	getAll: async (_, res) => {
		try {
			const contents = await Content.find().populate({
				path: 'sections',
				populate: {
					path: 'pages',
				},
			});

			return res.status(200).json(contents);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	getById: async (req, res) => {
		const { id } = req.params;
		try {
			const content = await Content.findById(id).populate({
				path: 'sections',
				populate: {
					path: 'pages',
				},
			});

			return res.status(200).json(content);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	deleteContent: async (req, res) => {
		const { id } = req.params;
		try {
			await Content.findByIdAndRemove(id);
			return res.status(200).json({ message: 'Content deleted' });
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	updateContent: async (req, res) => {
		const { id } = req.params;
		const { title, desc, published } = req.body;
		try {
			await Content.findByIdAndUpdate(id, {
				title,
				desc,
				published,
			});

			const updatedContent = await Content.findById(id).populate({
				path: 'sections',
				populate: {
					path: 'pages',
				},
			});
			return res.status(200).json(updatedContent);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

const AdminControllerSections = {
	createNewSection: async (req, res) => {
		const { id } = req.params;
		const { title, published } = req.body;
		const newPage = new Page({
			_id: new Types.ObjectId(),
			content: '',
		});

		const newSection = new Section({
			_id: new Types.ObjectId(),
			title: title,
			published: published,
			pages: [newPage._id],
		});

		try {
			await newPage.save();
			const section = await newSection.save();

			await Content.findByIdAndUpdate(id, { $push: { sections: section } });

			const updatedContent = await Content.findById(id).populate({
				path: 'sections',
				populate: {
					path: 'pages',
				},
			});

			return res.status(200).json(updatedContent);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	getSectionById: async (req, res) => {},

	deleteSection: async (req, res) => {},

	updateSection: async (req, res) => {},
};

module.exports = { AdminControllerContents, AdminControllerSections };
