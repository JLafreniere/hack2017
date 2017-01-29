
      var map, heatmap;
      let ArrayPts =[];



      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 37.775, lng: -122.434},
          mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 30);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      function getPoints() {
        return ArrayPts;
      }











              function placeBusiness(lat, long, traffic){
//Place un point sur la carte en fonction de l'emplacement 
//et du niveau de traffic de l'entreprise
	for (var i = traffic - 1; i >= 0; i--) {
	ArrayPts.push(new google.maps.LatLng(lat, long));
	}
	}

function HeatMapDelay() {
  
  window.setTimeout(HeatMap,10);
}

function HeatMap() {


	placeBusiness(37.775, -122.434, 10);

	placeBusiness(37.770, -122.434, 9);

	placeBusiness(37.765, -122.434, 8);

	placeBusiness(37.760, -122.434, 7);

	placeBusiness(37.755, -122.434, 6);

	placeBusiness(37.750, -122.434, 5);

	placeBusiness(37.745, -122.434, 4);

	placeBusiness(37.740, -122.434, 3);

	placeBusiness(37.735, -122.434, 2);

	placeBusiness(37.730, -122.434, 1);

  	console.log("kek");
	initMap();
	
	window.setTimeout(changeRadiusDelay,100);
}

function changeRadiusDelay(){
	heatmap.set('radius', heatmap.get('radius') ? null : 25);
	changeGradient()
}

HeatMapDelay();


/*
  	placeBusiness(37.775, -122.434, 10);
  	placeBusiness(37.775, -122.434, 10);
  	placeBusiness(37.775, -122.434, 10);
  	placeBusiness(37.785, -122.434, 10);
  	placeBusiness(37.790, -122.434, 10);
  	placeBusiness(37.780, -122.434, 10);
  	placeBusiness(37.776, -122.434, 10);
  	placeBusiness(37.77657, -122.434, 10);
  	placeBusiness(37.77657, -122.434, 10);
  	placeBusiness(37.7755, -122.434, 10);


  	placeBusiness(37.775, -122.434, 2);

  	placeBusiness(37.755, -122.834, 1);

  	placeBusiness(37.705, -122.424, 10);
 */





function ajusterHeure(){
	

}

						$('#sliderHeure').slider({
						formatter: function(value) {
							$("#heure").html(value);
							return  value;
						}
					});

$("#selJour").prop('selectedIndex', new Date().getDay());