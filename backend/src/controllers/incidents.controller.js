const incidentsController = {};

const Incident = require('../models/Incidents');

// |GET FOR FIND ALL INCIDENTS| \\
incidentsController.getAllIncidents = async (req, res) => {
	const incidents = await Incident.find();
	res.json(incidents);
};

// |GET FOR FIND INCIDENT BY ID| \\
incidentsController.getIncident = async (req, res) => {
	const incident = await Incident.findOne({ _id: req.params.id });
	res.json(incident);
};

// |POST FOR CREATE NEW INCIDENT| \\
incidentsController.createIncident = async (req, res) => {
	const { title, description, author } = req.body;
	const newIncident = new Incident({
		title,
		description,
		author
	});
	await newIncident.save();
	res.send({ message: 'Created Incident' });
};

// |PUT FOR UPDATE INCIDENT| \\
incidentsController.updateIncident = async (req, res) => {
	await Incident.updateOne({ _id: req.params.id }, req.body);
	res.send({ message: 'Update this Incident' });
};

// |DELETE FOR DELETE INCIDENT| \\
incidentsController.deleteIncident = async (req, res) => {
	await Incident.deleteOne({ _id: req.params.id });
	res.send({ message: 'Delete Incident' });
};

module.exports = incidentsController;
