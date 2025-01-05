<?php
session_start();
if (isset($_SESSION['user_email'])) {
    $user_email = $_SESSION['user_email'];
} else {
    $user_email = "Guest";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <!-- Include CSS and JS -->
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-content">
                <a href="#" class="logo">
                    <img src="assets/bearitt logo.png" alt="Logo" />
                </a>
                <ul class="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tools">Tools</a></li>
                </ul>
                <div class="user-info">
                    <!-- Empty span for JavaScript to populate -->
                    <span id="user-email"></span>
                    <a href="logout.php" class="btn btn-danger ml-3">Sign Out</a>
                </div>
            </div>
        </nav>
    </header>

    <!-- Pass PHP data to JavaScript -->
    <script>
        const userEmail = <?php echo json_encode($user_email); ?>; // Safely pass PHP variable to JavaScript
        document.getElementById('user-email').innerText = userEmail; // Set email dynamically
    </script>
</body>
</html>
