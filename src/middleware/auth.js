const { verifyToken } = require('../utils/token');
const Admin = require('../models/admin.model');

exports.authMid = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return res
			.status(401)
			.json({ success: false, error: 'Not authorized to access this route' });
	}

	try {
		const decoded = await verifyToken(token);

		const admin = await Admin.findById(decoded.id);

		if (!admin)
			return res
				.status(404)
				.json({ success: false, error: 'Admin not found with this id' });

		req.user = admin;
		next();
	} catch (err) {
		return res
			.status(401)
			.json({ success: false, error: 'Not authorized to access this route' });
	}
};
