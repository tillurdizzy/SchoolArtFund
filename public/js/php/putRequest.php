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
$_first = mysqli_real_escape_string($con,$data->first);
$_last = mysqli_real_escape_string($con,$data->last);
$_email = mysqli_real_escape_string($con,$data->email);
$_phone = mysqli_real_escape_string($con,$data->phone);
$_state = mysqli_real_escape_string($con,$data->state);
$_zip = mysqli_real_escape_string($con,$data->zip);

$query = "INSERT INTO mailingList(first,last,email,phone,state,zip)
VALUES(
'" . $_first . "', " .
"'" . $_last . "', " .
"'" . $_email . "', " .
"'" . $_phone . "', " .
"'" . $_state . "', " .
"'" . $_zip . "')";
$qry_res = mysqli_query($con,$query);
if ($qry_res) {
	$arr = array('msg' => "Insert successful", 'result' => $qry_res, 'params' => $_first);
	$jsn = json_encode($arr);
	echo($jsn);
} else {
	$arr = array('msg' => "Error inserting record", 'result' => $qry_res,'params' => $_first);
	$jsn = json_encode($arr);
	echo($jsn);
}
?>