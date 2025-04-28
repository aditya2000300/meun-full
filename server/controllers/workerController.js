// server/controllers/workerController.js
const Worker = require('../models/Worker');

exports.getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkerById = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    if (!worker) return res.status(404).json({ message: 'Worker not found' });
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWorker = async (req, res) => {
  const worker = new Worker(req.body);
  try {
    const savedWorker = await worker.save();
    res.status(201).json(savedWorker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};