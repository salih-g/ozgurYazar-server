const { Content, Section } = require('../../models/content.model');

const PublicController = {
	hello: async (req, res) => {
		res.status(200).json({
			message: '🦄🌈✨Hello World! 🌈✨🦄',
		});
	},

	getAllContents: async (_, res) => {
		try {
			const contents = await Content.find({ published: true })
				.sort({ createdAt: -1 })
				.populate({
					path: 'sections',
					match: { published: true },
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
				match: { published: true },
				sort: { createdAt: 1 },
			});

			return res.status(200).json(content);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},

	getSectionById: async (req, res) => {
		const { id } = req.params;
		try {
			const section = await Section.findById(id);
			const contents = await Content.find({ published: true })
				.sort({ createdAt: -1 })
				.populate({
					path: 'sections',
					match: { published: true },
					sort: { createdAt: 1 },
				});

			const sectionIndex = contents[0].sections.findIndex(
				(section) => section._id.toString() === id,
			);
			let finalData;

			if (contents[0].sections[sectionIndex + 1] !== undefined) {
				const nextSectionId =
					contents[0].sections[sectionIndex + 1]._id.toString();

				finalData = { nextSectionId, ...section._doc };
			} else {
				finalData = { ...section._doc };
			}

			return res.status(200).json(finalData);
		} catch (err) {
			return res.status(500).json({ error: err.message || err });
		}
	},
};

module.exports = PublicController;
