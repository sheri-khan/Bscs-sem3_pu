// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(cors()); // Allow cross-origin requests

// Serve static files (like CSS, JS) from the main folder
app.use(express.static(path.join(__dirname))); // This will serve all files in your folder

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// MongoDB Schemas and Models
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
});

const Contact = mongoose.model('Contact', contactSchema);
const Review = mongoose.model('Review', reviewSchema);

// Routes
// Serve HTML pages
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

// Contact Us Form Submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting contact form' });
    }
});

// Review Form Submission
app.post('/api/reviews', async (req, res) => {
    try {
        const { name, review, rating } = req.body;
        const newReview = new Review({ name, review, rating });
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting review' });
    }
});

// Get All Reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});

// Start the Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
