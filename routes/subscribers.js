const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber')

module.exports = router;

// Get all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get one
router.get('/:id', (req, res) => {
    res.send('You are asking for details about ' + req.params.id);
});

// Create one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber(
        {
            name: req.body.name,
            subscribedToChannel: req.body.subscribedToChannel,
        }
    );
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
