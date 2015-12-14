<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
define( "DATABASE_SERVER", "localhost");
define( "DATABASE_USERNAME", "tillurdizzy9954");
define( "DATABASE_PASSWORD", "SaDie9954");
define( "DATABASE_NAME", "school-fund-art");
//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$title = mysqli_real_escape_string($con,$data->title);
$venue = mysqli_real_escape_string($con,$data->venue);
$dates = mysqli_real_escape_string($con,$data->dates);
$status = mysqli_real_escape_string($con,$data->status);
$img = mysqli_real_escape_string($con,$data->bio);

$query = "INSERT INTO events(title,venue,dates,status,img)
VALUES(
'" . $title . "', " .
"'" . $venue . "', " .
"'" . $dates . "', " .
"'" . $status . "', " .
"'" . $img . "')";
$qry_res = mysqli_query($con,$query);
if ($qry_res) {
	$arr = array('msg' => "Successful", 'result' => $qry_res, 'params' => $title);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error", 'result' => $qry_res,'params' => $title);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>