const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

module.exports = router;

// Get all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one
router.get('/:id', getSubscriber, (req, res) => {
  res.send(req.subscriber.name);
});

// Create one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete one
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await req.subscriber.remove();
    res.json({ message: 'Subscriber deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSubscriber(req, res, next) {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    console.log('subscriber found!');
    req.subscriber = subscriber;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
