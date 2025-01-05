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

    // Initialize Swiper for other elements
    const swiper = new Swiper('.my-swiper', {
        slidesPerView: 3,  // Default to 3 cards per row
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
            // Desktop view: 2 cards per slide
            1024: {
                slidesPerView: 2,
                spaceBetween: 0  // Space between cards on larger screens
            }
        }
    });
});

// Mobile menu toggle functionality
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const closeDrawerButton = document.getElementById('close-drawer');

// Make sure elements exist before adding event listeners
if (menuToggle && mobileDrawer && closeDrawerButton) {
    menuToggle.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
    });

    closeDrawerButton.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
    });
}

// Toggle shopping list visibility
function toggleShoppingList() {
    var shoppingList = document.getElementById('shopping-list');
    if (shoppingList.style.display === "none" || shoppingList.style.display === "") {
        shoppingList.style.display = "block";
    } else {
        shoppingList.style.display = "none";
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.querySelector(`.${sectionId}-container`);
    if (section) {
        // Calculate the section's position and subtract the desired offset (e.g., 80px)
        const offset = 100; // Adjust this value as needed
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        // Smoothly scroll to the calculated position
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Challenges toggle visibility
document.getElementById('toggle-challenges').addEventListener('click', function() {
    var challengeSection = document.getElementById('challenge-sections');
    if (challengeSection.style.display === 'none' || challengeSection.style.display === '') {
        challengeSection.style.display = 'block';
        this.textContent = 'Hide Daily 9-Minute Challenges'; // Change button text
    } else {
        challengeSection.style.display = 'none';
        this.textContent = 'Show Daily 9-Minute Challenges'; // Revert button text
    }
});
