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
$name_first = mysqli_real_escape_string($con,$data->name_first);
$name_last = mysqli_real_escape_string($con,$data->name_last);
$photo = mysqli_real_escape_string($con,$data->photo);
$bio = mysqli_real_escape_string($con,$data->bio);

$query = "INSERT INTO artists(name_first,name_last,photo,bio)
VALUES(
'" . $name_first . "', " .
"'" . $name_last . "', " .
"'" . $photo . "', " .
"'" . $bio . "')";
$qry_res = mysqli_query($con,$query);
if ($qry_res) {
	$arr = array('msg' => "Successful", 'result' => $qry_res, 'params' => $name_last);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error", 'result' => $qry_res,'params' => $name_last);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>