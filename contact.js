// contact.js (Frontend JavaScript)
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent the default form submission

    const formData = new FormData(e.target);  // Get the form data
    const data = Object.fromEntries(formData);  // Convert it to an object

    try {
        // Send data to your backend
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // Send data as JSON
        });

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
