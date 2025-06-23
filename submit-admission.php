<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'student') {
    header("Location: register.html");
    exit();
}

$host = "localhost";
$user = "root";
$pass = "";
$db = "diu_clone";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$program = $_POST['program'];
$ssc_gpa = $_POST['ssc_gpa'];
$hsc_gpa = $_POST['hsc_gpa'];
$user_id = $_SESSION['user_id'];
$status = 'pending';

// Validate GPA inputs
if ($ssc_gpa < 0 || $ssc_gpa > 5 || $hsc_gpa < 0 || $hsc_gpa > 5) {
    die("Error: GPA values must be between 0 and 5.");
}

// Use prepared statement
$stmt = $conn->prepare("INSERT INTO admissions (full_name, program, ssc_gpa, hsc_gpa, user_id, status) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssddis", $full_name, $program, $ssc_gpa, $hsc_gpa, $user_id, $status);

if ($stmt->execute()) {
    header("Location: student-dashboard.html?status=success");
    exit();
} else {
    echo "Error inserting form: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>