const incidentsController = {};

incidentsController.getAllIncidents = (req, res) => res.json({message: 'Get all Incidents'});

incidentsController.getIncident = (req, res) => res.json({message: 'Get this Incident'});

incidentsController.createIncident = (req, res) => res.send({message: 'Created Incident'});

incidentsController.updateIncident = (req, res) => res.send({message: 'Update this Incident'});

incidentsController.deleteIncident = (req, res) => res.send({message: 'Delete Incident'});

module.exports = incidentsController;