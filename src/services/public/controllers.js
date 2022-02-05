const { Content, Page, Section } = require('../../models/content.model');

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
};

module.exports = PublicController;
