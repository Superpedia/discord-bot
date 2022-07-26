const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema(
	{
		guildId: {
			type: String,
			required: true,
			unique: true,
		},
		welcomePublicMessage: {
			enabled: {
				type: Boolean,
				default: false,
			},
			message: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
      },
			channelId: String,
		},
		welcomePrivateMessage: {
			enabled: {
				type: Boolean,
				default: false,
			},
			message: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Guild", guildSchema);
