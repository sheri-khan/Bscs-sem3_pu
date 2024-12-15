const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like CSS, JS) from the main folder
app.use(express.static(path.join(__dirname)));  // This will serve all files in your 'Bscs-sem3_pu' folder

// Define routes for each HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/review', (req, res) => {
    res.sendFile(path.join(__dirname, 'review.html'));
});

app.get('/pastl-paper', (req, res) => {
    res.sendFile(path.join(__dirname, 'pastl-paper.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
