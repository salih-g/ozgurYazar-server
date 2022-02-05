const Admin = require('../../models/admin.model');

const { sendToken } = require('../../utils/token');

const AuthController = {
	register: async (req, res) => {
		const { username, password } = req.body;

		try {
			const newAdmin = await new Admin({
				username,
				password,
			});
			const admin = await newAdmin.save();

			sendToken(admin, 201, res);
		} catch (err) {
			return res
				.status(500)
				.json({ success: false, error: err.message || err });
		}
	},
	login: async (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({
				success: false,
				error: 'Please provide username and password.',
			});
		}

		try {
			const admin = await Admin.findOne({ username });

			if (!admin) {
				return res
					.status(404)
					.json({ success: false, error: 'Invalid credentials' });
			}

			const isMatch = await admin.matchPassword(password);

			if (!isMatch) {
				return res
					.status(404)
					.json({ success: false, error: 'Invalid credentials' });
			}

			sendToken(admin, 200, res);
		} catch (err) {
			return res
				.status(500)
				.json({ success: false, error: err.message || err });
		}
	},
};

module.exports = AuthController;
