const router = require('express').Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights);

router.get('/:id', controller.getFlights);

router.post('/',controller.CreateFlight);

router.put('/:id',controller.updateFlight);

router.delete('/:id',controller.deleteFlight);

module.exports = router;


