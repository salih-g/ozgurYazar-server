const { Schema, model } = require('mongoose');

const SectionSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: false,
		},
		published: {
			type: Boolean,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true },
);

const ContentSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		published: {
			type: Boolean,
			required: true,
		},
		sections: [{ type: Schema.Types.ObjectId, ref: 'section' }],
	},
	{ versionKey: false, timestamps: true },
);

const section = model('section', SectionSchema);
const content = model('content', ContentSchema);

module.exports = { Section: section, Content: content };
