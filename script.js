document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    // Function to move to the next slide
    const nextSlide = () => {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    };

    // Automatically move to the next slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Toggle for mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});



// JavaScript for Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

// Toggle mobile menu visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active"); // Toggle the "active" class to show/hide the menu
});



