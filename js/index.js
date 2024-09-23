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
    // Define descriptions for each step with titles in bold
    var descriptions = {
        "step1": "Get a free estimate for your auto repair needs with no appointment necessary. Visit us during our walk-in hours for an accurate estimate.",
        "step2": "Drop off your car and opt for a shuttle within our service radius. We make it easy and convenient for you.",
        "step3": "Our expert team handles all necessary repairs and services with precision and care to ensure your vehicle is in top condition.",
        "step4": "We clean your vehicle thoroughly after service, ensuring it’s in pristine condition when you pick it up.",
        "step5": "Pick up your car and pay a fair price. We provide transparent pricing and value-driven solutions that fit your budget."
    };

    // Function to initialize the state of buttons based on screen width
    function initializeButtons() {
        if ($(window).width() <= 767) {
            // For mobile: Set initial description and make no button active
            $("#info-row").html(descriptions["step1"]).show();
            $(".steps button").removeClass("active");
            $(".steps").addClass("disable-buttons-mobile"); // Disable buttons on mobile
        } else {
            // For larger screens: Set initial description and activate the "free estimate" button
            $("#info-row").html(descriptions["step1"]).show();
            $("#step1").addClass("active"); // Activate "Free Estimates" button
            $(".steps").removeClass("disable-buttons-mobile"); // Enable buttons on larger screens
        }
    }

    // Initialize buttons based on screen width
    initializeButtons();

    // Add click event for each button
    $(".steps button").click(function() {
        if ($(".steps").hasClass("disable-buttons-mobile")) return; // Do nothing if buttons are disabled

        // Remove 'active' class from all buttons
        $(".steps button").removeClass("active");

        // Get the ID of the clicked button
        var stepId = $(this).attr("id");

        // Add the 'active' class to the clicked button
        $(this).addClass("active");

        // Get the corresponding description
        var description = descriptions[stepId];

        // Display the description in the 'info-row' div below all the buttons
        $("#info-row").html(description).show();
    });

    // Handle resizing for mobile layout
    function updateLayout() {
        if ($(window).width() <= 767) {
            // Remove existing descriptions from info-row
            $("#info-row").empty();
            // Insert descriptions directly below each button
            $(".steps button").each(function() {
                var stepId = $(this).attr("id");
                var description = descriptions[stepId];
                $(this).after('<div class="step-description">' + description + '</div>');
            });
            // Ensure no button is active on mobile
            $(".steps button").removeClass("active");
            $(".steps").addClass("disable-buttons-mobile"); // Disable buttons on mobile
        } else {
            // Remove any dynamic descriptions if resizing back to larger screens
            $(".step-description").remove();
            $(".steps").removeClass("disable-buttons-mobile"); // Enable buttons on larger screens
        }
    }

    // Initial layout update
    updateLayout();

    // Update layout on window resize
    $(window).resize(updateLayout);
});









$(document).ready(function() {
    // Scroll to "Our Services" section when the chevron icon is clicked
    $('.scroll-down').click(function() {
        $('html, body').animate({
            scrollTop: $('.OurServices').offset().top
        }, 800); // Adjust the duration (in milliseconds) for smooth scrolling
    });
});
