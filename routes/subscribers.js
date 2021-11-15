const express = require('express');
const router = express.Router();

module.exports = router;

// Get all
router.get('/', (req, res) => {
    res.send('Show list of items')
});

// Get one
router.get('/:id', (req, res) => {
    res.send('You are asking for details about ' + req.params.id);
});

// Create one
router.post('/', (req, res) => {
    res.send('You want to create something');
});
