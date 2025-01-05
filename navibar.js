// navibar.js
$(document).ready(function() {
    // Use jQuery to load navibar.html into the 'navbar' div
    $('#navbar-placeholder').load('navibar.html');
});

// footer
$(document).ready(function() {
    // Use jQuery to load navibar.html into the 'navbar' div
    $('#footer-placeholder').load('footer.html');
});



// $(document).ready(function() {
//     // Handle hamburger menu toggle
//     $("#hamburger-menu").click(function() {
//         $("#navbar-links").toggle(); // Toggle the visibility of the navbar links
//     });
// });

// $(document).ready(function() {
//     $('#mobile-menu-toggle').click(function() {
//         $('#mobile-drawer').toggleClass('open');
//     });

//     $('#close-drawer').click(function() {
//         $('#mobile-drawer').removeClass('open');
//     });
// });


$(document).ready(function () {
    // Toggle the mobile drawer when hamburger icon is clicked (open/close)
    $('#hamburger-menu').on('click', function () {
        $('#mobile-drawer').toggleClass('open'); // Toggle the 'open' class
    });

    // Close the mobile drawer when the close button is clicked
    $('#close-drawer').on('click', function () {
        $('#mobile-drawer').removeClass('open'); // Remove 'open' class to hide the drawer
    });

    // Optional: Close the drawer if clicking outside of it
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#mobile-drawer, #hamburger-menu').length) {
            $('#mobile-drawer').removeClass('open'); // Close drawer if clicked outside
        }
    });
});

