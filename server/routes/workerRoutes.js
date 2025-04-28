// server/routes/workerRoutes.js
const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');

router.get('/', workerController.getAllWorkers);
router.get('/:id', workerController.getWorkerById);
router.post('/', workerController.createWorker);

module.exports = router;