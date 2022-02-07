const { Content, Section } = require('../../models/content.model');

const PublicController = {
	hello: async (req, res) => {
		res.status(200).json({
			message: '🦄🌈✨Hello World! 🌈✨🦄',
		});
	},

	getAllContents: async (_, res) => {
		try {
			const contents = await Content.find({ published: true }).populate({
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

	getSectionById: async (req, res) => {
		const { id } = req.params;
		try {
			const sections = await Section.findById(id).populate('pages');

			return res.status(200).json(sections);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

module.exports = PublicController;
