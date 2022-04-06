const { Content, Section } = require('../../models/content.model');
const { Types } = require('mongoose');

const ContentControllers = {
	createNewContent: async (req, res) => {
		const { title, desc, published, sectionName } = req.body;

		const newSection = new Section({
			_id: new Types.ObjectId(),
			title: sectionName,
			published: false,
			content: '',
		});

		const newContent = new Content({
			_id: new Types.ObjectId(),
			title: title,
			desc: desc,
			published: published,
			sections: [newSection._id],
		});

		try {
			await newSection.save();
			const content = await newContent.save();

			return res.status(201).json(content);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	getAll: async (_, res) => {
		try {
			const contents = await Content.find()
				.sort({ createdAt: -1 })
				.populate({
					path: 'sections',
					sort: { createdAt: 1 },
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
				sort: { createdAt: 1 },
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
				sort: { createdAt: 1 },
			});
			return res.status(200).json(updatedContent);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

const SectionControllers = {
	createNewSection: async (req, res) => {
		const { id } = req.params;
		const { title, published, content } = req.body;

		const newSection = new Section({
			_id: new Types.ObjectId(),
			title: title,
			published: published,
			content: content || '',
		});

		try {
			const section = await newSection.save();

			await Content.findByIdAndUpdate(id, { $push: { sections: section } });

			const updatedContent = await Content.findById(id).populate({
				path: 'sections',
				sort: { createdAt: 1 },
			});

			return res.status(201).json(updatedContent);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	getSectionById: async (req, res) => {
		const { id } = req.params;

		try {
			const section = await Section.findById(id);

			return res.status(200).json(section);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	updateSection: async (req, res) => {
		const { id } = req.params;
		const { title, published, content } = req.body;

		try {
			await Section.findByIdAndUpdate(id, {
				title,
				published,
				content,
			});

			const updatedSection = await Section.findById(id);
			return res.status(200).json(updatedSection);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	deleteSection: async (req, res) => {
		const { id } = req.params;
		try {
			await Section.findByIdAndRemove(id);
			return res.status(200).json({ message: 'Section deleted' });
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

module.exports = { ContentControllers, SectionControllers };
