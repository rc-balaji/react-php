<!-- public/index.php -->
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents('php://input'), true);

$num1 = $data['num1'];
$num2 = $data['num2'];
$result = $num1 + $num2;

echo json_encode(['result' => $result]);
?>
