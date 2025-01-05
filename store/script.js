var swiper = new Swiper('.my-swiper', {
    direction: 'horizontal',
    loop: true,              // Infinite loop
    autoplay: {
        delay: 3000,         // Autoplay every 3 seconds
        disableOnInteraction: false, // Keep autoplay on user interaction
    },
    slidesPerView: 1.5,      // Show 1 full slide and portions of 2 others
    centeredSlides: true,    // Center the active slide
    spaceBetween: 30,  
    autoHeight: false,    // Space between slides
});
