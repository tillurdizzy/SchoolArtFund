<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));
define( "DATABASE_SERVER", "localhost");
define( "DATABASE_USERNAME", "tillurdizzy9954");
define( "DATABASE_PASSWORD", "SaDie9954");
define( "DATABASE_NAME", "sschool-fund-art");
//connect to the database.
$con = mysqli_connect(DATABASE_SERVER, DATABASE_USERNAME, DATABASE_PASSWORD,DATABASE_NAME) or die ('ERROR!!!');
$artist = mysqli_real_escape_string($con,$data->artist);
$title = mysqli_real_escape_string($con,$data->title);
$medium = mysqli_real_escape_string($con,$data->medium);
$price = mysqli_real_escape_string($con,$data->price);
$date = mysqli_real_escape_string($con,$data->date);
$thumbsrc = mysqli_real_escape_string($con,$data->thumbsrc);
$fullsrc = mysqli_real_escape_string($con,$data->fullsrc);

$query = "INSERT INTO artworks(artist,title,medium,price,date,thumbsrc,fullsrc)
VALUES(
'" . $artist . "', " .
"'" . $title . "', " .
"'" . $medium . "', " .
"'" . $price . "', " .
"'" . $date . "', " .
"'" . $thumbsrc . "', " .
"'" . $fullsrc . "')";
$qry_res = mysqli_query($con,$query);
if ($qry_res) {
	$arr = array('msg' => "Successful", 'result' => $qry_res, 'params' => $artist);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error", 'result' => $qry_res,'params' => $artist);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>