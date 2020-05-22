const { Schema, model } = require('mongoose');

const incidentSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		description: {
			type: String
		},
		author: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('Incident', incidentSchema);
