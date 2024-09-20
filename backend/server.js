// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/event-management', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

