var map, heatmap;
let ArrayPts = [];


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 46.555,
            lng: -72.7399493
        },
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
    heatmap.set('radius', heatmap.get('radius') ? null : 60);
}


function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}


function getPoints() {
    return ArrayPts;
}


function placeBusiness(lat, long, traffic) {
    //Place un point sur la carte en fonction de l'emplacement 
    //et du niveau de traffic de l'entreprise
    console.log("bonjour");
    for (var i = (traffic * 3) - 1; i >= 0; i--) {
        ArrayPts.push(new google.maps.LatLng(lat, long));
    }
}

function HeatMapDelay() {
    window.setTimeout(HeatMap, 10);
}

function HeatMap() {
    initMap();
    window.setTimeout(changeRadiusDelay, 100);
}

function changeRadiusDelay() {
    heatmap.set('radius', heatmap.get('radius') ? null : 25);
    changeGradient()
}

HeatMapDelay();



var sliderHeure = $('#sliderHeure').slider({
    formatter: function(value) {
        $("#heure").html(value);
        return value;
    }
});

$("#selJour").prop('selectedIndex', new Date().getDay());


function traduireAnglais(){

  $("#btnSoumettre").html("Submit");


}