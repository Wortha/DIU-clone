<?php
session_start();
$conn = new mysqli("localhost", "root", "", "diu_clone");

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($user_id, $hashed_pw);
    $stmt->fetch();

    if (password_verify($password, $hashed_pw)) {
        $_SESSION['user_id'] = $user_id;
        header("Location: student-status.php");
    } else {
        echo "Incorrect password";
    }
} else {
    echo "User not found.";
}
