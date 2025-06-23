<?php
session_start();
$user_id = $_SESSION['user_id'];

$conn = new mysqli("localhost", "root", "", "diu_clone");
$stmt = $conn->prepare("SELECT * FROM admissions WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();

$result = $stmt->get_result();

echo "<h2>Your Application Status</h2>";
while ($row = $result->fetch_assoc()) {
    echo "Program: " . $row['program'] . "<br>";
    echo "Status: <strong>" . $row['status'] . "</strong><br><hr>";
}
