exports.hello = async (_, res) => {
	res.status(200).json({
		message: '🦄🌈✨Hello World! 🌈✨🦄',
	});
};

exports.getAllContents = async (req, res) => {};
