<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Heatmaps</title>
		<style>
		</style>
		<script
		src="https://code.jquery.com/jquery-3.1.1.js"
		integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
		crossorigin="anonymous"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		\<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/9.7.0/bootstrap-slider.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/9.7.0/css/bootstrap-slider.css" />
	</head>
	<body >
		<div  class="container container-full" style="
			margin-right: 0px;
			margin-left: 0px;
			">
			<div class="row">
				<div class="col-lg-2">
					
					<h1 id="TitrePage">What's Up?</h1>
					
					<button class="btn btn-info col-sm-10" onclick="toggleHeatmap()">Points chauds</button>
					<br>
					
					<button class="btn btn-info col-sm-10" onclick="changeOpacity()">Changer l'opacité</button>
					<br>
					<form method="post" name="infos_recherche" action="rechercher.php">
						<div class="form-group"><br>
							<label for="sel1">Jour</label>
							<select class="form-control" id="selJour" name="jour">
								
								<option value="0">Dimanche</option>
								<option value="1">Lundi</option>
								<option value="2">Mardi</option>
								<option value="3">Mercredi</option>
								<option value="4">Jeudi</option>
								<option value="5">Vendredi</option>
								<option value="6">Samedi</option>
							</select>
						</div>
						<br>
						<input name="heure" id="sliderHeure" data-slider-id='sliderHeure' type="text" data-slider-min="0" data-slider-max="23" data-slider-step="1" data-slider-value="14"/>
						<span id="heure"></span>
						<button type="button" onclick="getData(); " id="btnSoumettre">Soumettre</button>
					</form>
				</div>
				<div class="col-lg-10"><div id="map"></div></div>
			</div>
			<div class="row">
				<div class="col-lg-12" id="spam">test</div>
			</div>
		</div>
		
		
		<script>
		</script>
		<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxF-Wa_6YWDRLneBhqqIqkkNXlwMaKN1I&libraries=visualization&callback=initMap">
		</script>
		<script src="heatmap.js"></script>
	<script type="text/javascript">



    function getData() {
        $.ajax({
            type: "POST",
            url: "rechercher.php",
            data: {'jour': $("#selJour").val(), 'heure': $("#sliderHeure").text()},
            success: function (data) {
                if (data) {
                    let str = data.split(";");
                    console.log(str);
                    str.forEach(function(element) {
                    	console.log(element);
    				let infos = element.split(",");
    				placeBusiness(infos[0],infos[1],infos[2]);
});
                    HeatMap();

                }
            },
            error: function (req) {
                alert("erreur");
            }
        });
    }
    
</script>
		
	</body>
</html>