exports.hello = (_, res) => {
	try {
		res.status(200).json({
			message: '🦄🌈✨Hello World! 🌈✨🦄',
		});
	} catch (error) {}
};
