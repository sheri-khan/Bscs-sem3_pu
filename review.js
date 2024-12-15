// review.js (Frontend JavaScript)
document.getElementById('reviewForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent the default form submission

    const formData = new FormData(e.target);  // Get the form data
    const data = Object.fromEntries(formData);  // Convert it to an object

    try {
        // Send data to your backend
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  // Send data as JSON
        });

        if (response.ok) {
            alert('Review submitted successfully!');
        } else {
            alert('Error submitting review');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
