// tilt.js

// Initialize Vanilla Tilt on all cards with the 'card' class
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,        // Maximum tilt rotation
    speed: 70,     // Speed of the tilt animation
    glare: true,    // Enables glare effect
    "max-glare": 0.3 // Maximum glare opacity
});
