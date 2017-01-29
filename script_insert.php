<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Heatmaps</title>
		</head>
		<body>
<?php






function insererMagasin($id_mag, $ouv, $ferm, $peak, $jour) {
		$con = mysqli_connect("localhost","root","","bd_heatmap");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

//Obtiens tous les magasins pour l'heure et la date sélectionné


   for ($x = $ouv; $x <=$ferm; $x++) {
   	$query = "insert into traffic values(null, ".$id_mag.", curdate(),  ".floor(3*(sin(($x-2.5415-($peak -6))/2))+7.1).",".$jour.",".$x.");";
   	echo $query."<br>";
     $con->query($query);
} 





mysqli_close($con);



}
//0 dimanche, 6 samedi


insererMagasin(100037, 9, 17, 12,1);



?>
</body>
</html>