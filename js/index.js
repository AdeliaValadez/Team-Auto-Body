document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Function to toggle the dropdown menu
    function toggleMenu() {
        dropdownMenu.classList.toggle('show');
        toggleButton.classList.toggle('active');
    }

    // Event listener for the toggle button
    toggleButton.addEventListener('click', toggleMenu);

    // Optional: Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            toggleButton.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

// Simple fade-in animation
window.onload = function() {
    const h1 = document.querySelector('.hero-content h1');
    const p = document.querySelector('.hero-content p');

    function fadeIn(element) {
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(interval);
            }
            opacity += 0.05;
            element.style.opacity = opacity;
            element.style.transform = `translateY(${20 - opacity * 20}px)`;
        }, 30);
    }

    fadeIn(h1);
    fadeIn(p);
};

// JavaScript to handle smooth scrolling (optional)
document.querySelector('.scroll-down').addEventListener('click', function () {
    document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
});








$(document).ready(function() {
    // Define descriptions for each step
    var descriptions = {
        "step1": "Get a free estimate for your auto repair needs with no appointment necessary. Visit us during our walk-in hours for an accurate estimate.",
        "step2": "Drop off your car and opt for a shuttle within our service radius. We make it easy and convenient for you.",
        "step3": "Our expert team handles all necessary repairs and services with precision and care to ensure your vehicle is in top condition.",
        "step4": "We clean your vehicle thoroughly after service, ensuring it’s in pristine condition when you pick it up.",
        "step5": "Pick up your car and pay a fair price. We provide transparent pricing and value-driven solutions that fit your budget."
    };

    // Function to initialize buttons based on screen width
    function initializeButtons() {
        if ($(window).width() <= 767) {
            // For mobile: Insert descriptions directly below each button and disable buttons
            $(".steps button").each(function() {
                var stepId = $(this).attr("id");
                var description = descriptions[stepId];
                if ($(this).next('.step-description').length === 0) {
                    $(this).after('<div class="step-description">' + description + '</div>'); // Insert description below button if not already inserted
                }
            });
            $(".steps button").removeClass("active"); // Ensure no button is active
            $(".steps").addClass("disable-buttons-mobile"); // Disable buttons on mobile
            $("#info-row").hide(); // Hide the info row on mobile
        } else {
            // For larger screens: Clear the mobile layout, enable buttons
            $(".step-description").remove(); // Remove the descriptions below each button
            $(".steps").removeClass("disable-buttons-mobile"); // Enable buttons for larger screens
            $("#info-row").html(descriptions["step1"]).show(); // Show the first step's description
            $("#step1").addClass("active"); // Set "Free Estimates" button as active
        }
    }

    // Initialize buttons when page loads
    initializeButtons();

    // Add click event for each button on larger screens
    $(".steps button").click(function() {
        if ($(window).width() > 767) {  // Only allow interaction on larger screens
            // Remove 'active' class from all buttons
            $(".steps button").removeClass("active");

            // Add the 'active' class to the clicked button
            $(this).addClass("active");

            // Get the corresponding description
            var stepId = $(this).attr("id");
            var description = descriptions[stepId];

            // Display the description in the 'info-row' div below all the buttons
            $("#info-row").html(description).show();
        }
    });

    // Handle window resizing for mobile and desktop layouts
    function updateLayout() {
        if ($(window).width() <= 767) {
            // Mobile: Insert descriptions below each button and disable button interaction
            if ($(".step-description").length === 0) { // Prevent multiple insertions
                $(".steps button").each(function() {
                    var stepId = $(this).attr("id");
                    var description = descriptions[stepId];
                    $(this).after('<div class="step-description">' + description + '</div>'); // Insert description below button
                });
            }
            $(".steps button").removeClass("active");
            $(".steps").addClass("disable-buttons-mobile"); // Disable buttons on mobile
            $("#info-row").hide(); // Hide the info row for mobile view
        } else {
            // Larger screens: Clear descriptions and enable button interaction
            $(".step-description").remove(); // Remove mobile-specific descriptions
            $(".steps").removeClass("disable-buttons-mobile"); // Enable buttons
            $("#info-row").html(descriptions["step1"]).show(); // Show the description for the first step
            $(".steps button").removeClass("active");
            $("#step1").addClass("active"); // Activate step 1 by default
        }
    }

    // Update layout on window resize
    $(window).resize(updateLayout);

    // Initial layout update on page load
    updateLayout();
});









$(document).ready(function() {
    // Scroll to "Our Services" section when the chevron icon is clicked
    $('.scroll-down').click(function() {
        $('html, body').animate({
            scrollTop: $('.OurServices').offset().top
        }, 800); // Adjust the duration (in milliseconds) for smooth scrolling
    });
});
