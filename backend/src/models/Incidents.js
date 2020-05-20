const { Schema, model } = require('mongoose');

const incidentSchema = new Schema({
  title: String,
  description: String,
  author: String
}, {
  timestamps: true
});

module.exports = model('Incident', incidentSchema);
