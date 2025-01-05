// Wait for DOM to load before initializing the Swipers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Full-Screen Swiper
    const fullScreenSwiper = new Swiper('.full-screen-swiper', {
        slidesPerView: 1,  // Show 1 card per slide on all screen sizes
        spaceBetween: 0,    // No space between cards
        loop: true,         // Loop through slides
        autoplay: {
            delay: 4000,  // Auto slide every 4 seconds
            disableOnInteraction: false  // Continue autoplay after interaction
        },
        navigation: {
            nextEl: null,  // No navigation buttons for full-screen swiper
            prevEl: null   // No navigation buttons for full-screen swiper
        }
    });

    const swiper = new Swiper('.my-swiper', {
        slidesPerView: 2,  // Default to 2 cards per row
        spaceBetween: 10,   // Small space between cards
        loop: true,         // Loop through slides
        navigation: {
            nextEl: '.swiper-button-next',  // Next button for swiper
            prevEl: '.swiper-button-prev'   // Previous button for swiper
        },
        autoplay: {
            delay: 4000,  // Auto slide every 4 seconds
            disableOnInteraction: false
        },
        breakpoints: {
            // Mobile view: 2 cards per slide
            320: {
                slidesPerView: 2,
                spaceBetween: 0  // Adjust space between cards on mobile
            },
            // Tablet view and up: 3 cards per slide
            768: {
                slidesPerView: 3,
                spaceBetween: 0  // Space between cards on tablets and larger
            },
            // Desktop view: 4 cards per slide
            1024: {
                slidesPerView: 4,
                spaceBetween: 0  // Space between cards on larger screens
            }
        }
    });
});



// Select the elements
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const closeDrawerButton = document.getElementById('close-drawer');

// Toggle the mobile drawer on button click (open/close)
menuToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
});

// Close the drawer when the close button is clicked
closeDrawerButton.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
});
           

// Initialize Swiper for Testimonials
new Swiper('.testimonial-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("animatedSection");

    // Scroll detection for animation
    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight - 100) { // Trigger before fully in view
            section.classList.add("visible");
        }
    };

    // Reset animations initially
    section.classList.remove("visible");

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Run scroll logic on initial load
    handleScroll();
});


// Smooth scroll for buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize Swiper for Testimonials
new Swiper('.testimonial-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});


