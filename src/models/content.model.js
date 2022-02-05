const { Schema, model } = require('mongoose');

const PageSchema = new Schema(
	{
		content: {
			type: String,
			required: false,
		},
	},
	{ versionKey: false, timestamps: true },
);

const SectionSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		published: {
			type: Boolean,
			required: true,
		},
		pages: [{ type: Schema.Types.ObjectId, ref: 'page' }],
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

const page = model('page', PageSchema);
const section = model('section', SectionSchema);
const content = model('content', ContentSchema);

module.exports = { Page: page, Section: section, Content: content };
