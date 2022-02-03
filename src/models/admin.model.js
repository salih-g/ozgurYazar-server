const mongoose = require('mongoose');
const { hashPassword, validPassword } = require('../utils/password');
const { signToken } = require('../utils/token');

const AdminSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 20,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{ versionKey: false },
);

AdminSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	this.password = await hashPassword(this.password);
	next();
});

AdminSchema.methods.matchPassword = async function (password) {
	return await validPassword(password, this.password);
};

AdminSchema.methods.getSignedToken = async function () {
	return await signToken(this._id);
};

module.exports = mongoose.model('admin', AdminSchema);
