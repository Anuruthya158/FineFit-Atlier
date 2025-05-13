
// Form submission handling
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        garment: document.getElementById('garment').value,
        embroidery: document.getElementById('embroidery').value,
        color: document.getElementById('color').value,
        description: document.getElementById('description').value,
        budget: document.getElementById('budget').value
    };

    // In a real scenario, you would send this data to your server
    // For now, we'll just show an alert
    alert('Thank you for your order! We will contact you soon to discuss details.');

    // Reset the form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .hero a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
