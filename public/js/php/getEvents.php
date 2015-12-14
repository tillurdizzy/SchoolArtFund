<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/artistVO.php');
define( "DATABASE_SERVER", "localhost");
define( "DATABASE_USERNAME", "tillurdizzy9954");
define( "DATABASE_PASSWORD", "SaDie9954");
define( "DATABASE_NAME", "sschool-fund-art");
//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$query = sprintf("SELECT * FROM events");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new artistVO();
	$oneVO->PRIMARY_ID = $row->PRIMARY_ID;
	$oneVO->title = $row->title;
	$oneVO->venue = $row->venue;
	$oneVO->dates = $row->dates;
	$oneVO->status = $row->status;
	$oneVO->img = $row->img;
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>