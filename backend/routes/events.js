const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // File upload handling

// Create Event
router.post('/', upload.array('media'), async (req, res) => {
  const { title, description } = req.body;
  const media = req.files.map(file => file.path);
  try {
    const event = new Event({ title, description, media, creator: req.headers['user-id'] });
    await event.save();
    res.status(201).send('Event created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Edit Event
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete Event
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.send('Event deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// View All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// View a specific Event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
