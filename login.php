<?php
// Start the session
session_start();

// Connect to the database
$servername = "localhost";
$username = "root"; // MySQL username
$password = "admin"; // MySQL password (use the one you set for MySQL)
$dbname = "fitness_website"; // Database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Query to check if the email exists in the database
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);

    // Check if email is found
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        // Verify password
        if (password_verify($password, $row['password'])) {
            // Password is correct, start session and redirect to a dashboard or homepage
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            header("Location: home.html"); // Redirect to dashboard page
            exit();
        } else {
            // Password is incorrect
            $error_message = "Incorrect password. Please try again.";
        }
    } else {
        // Email doesn't exist
        $error_message = "No account found with this email.";
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
