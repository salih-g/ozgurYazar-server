const PublicController = {
	hello: async (req, res) => {
		res.status(200).json({
			message: '🦄🌈✨Hello World! 🌈✨🦄',
		});
	},
	getAllContents: async (req, res) => {},
};

module.exports = PublicController;
