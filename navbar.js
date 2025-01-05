// Navbar HTML content
let navbarHTMLContent = `
    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-content">
            <!-- Logo -->
            <a href="#" class="logo">
                <img src="assets/bearitt logo.png" alt="Logo" />
            </a>

            <!-- Hamburger Icon (Mobile Only) -->
            <div class="hamburger" id="hamburger-menu">
                <i class="fas fa-bars"></i>
            </div>

            <!-- Desktop Navigation Links -->
            <ul class="navbar-links" id="navbar-links">
                <li><a href="home.html">Home</a></li>
                <li><a href="nutrition.html">Services</a></li>
                <li><a href="calculator1/calculator.html">Tools</a></li>
                <li><a href="community.html">Community</a></li>
                <li><a href="#contact">Fitness</a></li>
                <li><a href="trainers/index.html">Trainer</a></li>
                <li><a href="store/index.html">Shop</a></li>
            </ul>
        </div>
    </nav>

    <!-- Drawer for Mobile -->
    <div id="mobile-drawer" class="mobile-drawer">
        <div id="close-drawer" class="drawer-header">
            <i class="fas fa-times"></i> 
        </div>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="nutrition.html">Services</a></li>
            <li><a href="calculator1/calculator.html">Tools</a></li>
            <li><a href="community.html">Community</a></li>
            <li><a href="store/index.html">Shop</a></li>
        </ul>
    </div>
`;

// Insert navbar HTML content into placeholder
document.getElementById('navbar-placeholder').innerHTML = navbarHTMLContent;

// Drawer toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const closeDrawer = document.getElementById("close-drawer");

    // Toggle drawer visibility
    hamburgerMenu.addEventListener("click", () => {
        mobileDrawer.classList.toggle("open");
    });

    // Close drawer
    closeDrawer.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
    });

    // Close drawer when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !mobileDrawer.contains(event.target) &&
            !hamburgerMenu.contains(event.target) &&
            mobileDrawer.classList.contains("open")
        ) {
            mobileDrawer.classList.remove("open");
        }
    });
});
