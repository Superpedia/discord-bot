const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
	type: {
		type: String,
		Option: ["message", "embed"],
		default: "message",
	},
	//  message
	content: {
		type: String,
		required: true,
		default: "This is default message.",
	},
	//  embed
	title: {
		type: String,
		default: "This is default title",
	},
	description: {
		type: String,
		default: "This is default description",
	},
	color: {
		type: String,
		default: "RANDOM",
	},
	fields: [
		{
			name: String,
			value: String,
		},
	],
	//  TODO add more fields like thumbnail, image etc..., before that read its type and description from docs
	footer: {
		type: String,
		default: "This is default footer",
	},
	//  control embed properties
	embedConfig: {
		title: {
			type: Boolean,
			default: true,
		},
		description: {
			type: Boolean,
			default: true,
		},
		color: {
			type: Boolean,
			default: true,
		},
		fields: {
			type: Boolean,
			default: true,
		},
		footer: {
			type: Boolean,
			default: true,
		},
	},
});

module.exports = mongoose.model("Message", messageSchema);
