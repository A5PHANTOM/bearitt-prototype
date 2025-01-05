<?php
// Connect to the database
$servername = "localhost";
$username = "root"; // MySQL username
$password = "admin"; // MySQL password
$dbname = "fitness_website"; // Database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection  
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $age = mysqli_real_escape_string($conn, $_POST['age']);
    $mobile = mysqli_real_escape_string($conn, $_POST['mobile']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $hashed_password = password_hash($password, PASSWORD_DEFAULT); // Hash password

    // Debugging: Output the collected data for verification
    // echo "Name: $name, Age: $age, Mobile: $mobile, Email: $email, Password: $hashed_password";

    // Check if the email already exists
    $check_email_sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($check_email_sql);

    if ($result->num_rows > 0) {
        echo "<script>alert('Email already exists!');</script>";
    } else {
        // Insert data into the users table
        $sql = "INSERT INTO users (name, age, mobile, email, password) 
                VALUES ('$name', '$age', '$mobile', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Registration successful!');</script>";
            // Redirect to login page after successful registration
            header("Location: index.html");
            exit();
        } else {
            // Output error for debugging
            echo "<script>alert('Error: " . $conn->error . "');</script>";
        }
    }

    // Close the database connection
    $conn->close();
}
?>
