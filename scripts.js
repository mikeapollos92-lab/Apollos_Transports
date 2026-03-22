// scripts.js

// Sample JavaScript for form handling and interactive features

// Function to validate form
function validateForm() {
    const form = document.getElementById('myForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;

    if (!name || !email) {
        alert('Please fill in all fields.');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}

// Example function to make an element interactive
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Example of adding event listeners on window load
window.onload = function() {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            // Form is valid, perform actions or submit
        }
    });
};
