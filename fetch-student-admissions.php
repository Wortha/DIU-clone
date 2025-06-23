<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'student') {
    echo json_encode(['success' => false, 'message' => 'Unauthorized access']);
    exit();
}

$host = "localhost";
$user = "root";
$pass = "";
$db = "diu_clone";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}

$user_id = $_SESSION['user_id'];
$stmt = $conn->prepare("SELECT full_name, program, ssc_gpa, hsc_gpa, status FROM admissions WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$admissions = [];
while ($row = $result->fetch_assoc()) {
    $admissions[] = [
        'full_name' => htmlspecialchars($row['full_name']),
        'program' => htmlspecialchars($row['program']),
        'ssc_gpa' => htmlspecialchars($row['ssc_gpa']),
        'hsc_gpa' => htmlspecialchars($row['hsc_gpa']),
        'status' => htmlspecialchars($row['status'])
    ];
}

if (empty($admissions)) {
    echo json_encode(['success' => true, 'admissions' => [], 'message' => 'No admission forms found']);
} else {
    echo json_encode(['success' => true, 'admissions' => $admissions]);
}

$stmt->close();
$conn->close();
?>