
<?php
$con = mysqli_connect("localhost","root","","bd_heatmap");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

//Obtiens tous les magasins pour l'heure et la date sélectionné
$query = "select magasins.latitude, magasins.longitude, traffic.achalandage
from traffic, magasins
where magasins.id_mag = traffic.id_magasin
and traffic.heure = ".$_POST["heure"]."
and traffic.jour_semaine = ".$_POST["jour"];


if ($result = $con->query($query)) {
    while ($row = $result->fetch_assoc()) {
   echo $row["latitude"].",".$row["longitude"].",".$row["achalandage"].";";
    }
    $result->free();
}

mysqli_close($con);
?>


