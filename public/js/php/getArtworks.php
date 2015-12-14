<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
require_once ('vo/artworkVO.php');
define( "DATABASE_SERVER", "localhost");
define( "DATABASE_USERNAME", "tillurdizzy9954");
define( "DATABASE_PASSWORD", "SaDie9954");
define( "DATABASE_NAME", "school-fund-art");
//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$query = sprintf("SELECT * FROM artworks");
$result = mysqli_query($con,$query);
$resultValueObjects = array();
while ($row = mysqli_fetch_object($result)) {
	$oneVO = new artworkVO();
	$oneVO->PRIMARY_ID = $row->PRIMARY_ID;
	$oneVO->artist = $row->artist;
	$oneVO->title = $row->title;
	$oneVO->medium = $row->medium;
	$oneVO->price_5x7 = $row->price_5x7;
	$oneVO->price_8x10 = $row->price_8x10;
	$oneVO->price_11x14 = $row->price_11x14;
	$oneVO->price_16x20 = $row->price_16x20;
	$oneVO->date = $row->date;
	$oneVO->thumbsrc = $row->thumbsrc;
	$oneVO->fullsrc = $row->fullsrc;
	array_push( $resultValueObjects, $oneVO );
}
echo json_encode($resultValueObjects);
?>