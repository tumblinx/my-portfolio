
// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Apply middleware
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to allow cross-origin requests

// Define a route to handle POST requests for sending emails
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received email from ${name} <${email}>: ${message}`);

    // Here you'd typically add logic to send an email, for now, we just log it
    res.status(200).json({ message: 'Email sent successfully!' });
});

// Define a basic route to check if server is running
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// Listen on a specific port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

