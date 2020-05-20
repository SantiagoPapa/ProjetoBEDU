const { Router } = require('express');
const router = Router();

const { getAllIncidents, getIncident, createIncident, updateIncident, deleteIncident } = require('../controllers/incidents.controller');

router.route('/')
  .get(getAllIncidents)
  .post(createIncident)

router.route('/:id')
  .get(getIncident)
  .put(updateIncident)
  .delete(deleteIncident)

module.exports = router;