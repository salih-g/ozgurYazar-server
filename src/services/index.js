const auth = require('./auth/router');
const admin = require('./admin/router');
const public = require('./public/router');

module.exports = {
	auth,
	admin,
	public,
};
