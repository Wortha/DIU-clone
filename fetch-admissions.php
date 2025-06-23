<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'admin') {
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

$result = $conn->query("SELECT a.id, a.full_name, a.program, a.ssc_gpa, a.hsc_gpa, a.status, u.email 
                        FROM admissions a 
                        LEFT JOIN users u ON a.user_id = u.id");

if ($result === false) {
    echo json_encode(['success' => false, 'message' => 'Query failed: ' . $conn->error]);
    exit();
}

$admissions = [];
while ($row = $result->fetch_assoc()) {
    $admissions[] = [
        'id' => (int)$row['id'],
        'full_name' => htmlspecialchars($row['full_name']),
        'program' => htmlspecialchars($row['program']),
        'ssc_gpa' => htmlspecialchars($row['ssc_gpa']),
        'hsc_gpa' => htmlspecialchars($row['hsc_gpa']),
        'status' => htmlspecialchars($row['status']),
        'email' => htmlspecialchars($row['email'] ?? 'No user')
    ];
}

if (empty($admissions)) {
    echo json_encode(['success' => true, 'admissions' => [], 'message' => 'No admission forms found']);
} else {
    echo json_encode(['success' => true, 'admissions' => $admissions]);
}

$conn->close();
?>