let map;
function initialize() {
    let center = new google.maps.LatLng(37.422, -122.084058);
    map = new google.maps.Map(document.getElementById('map'), {
        center : center,
        zoom:13
    });
    let request = {
        location :center,
        radius: 8047,
        types: ['restaurant']
    };
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}
let marker = []
function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK){
        for (let index = 0; index < results.length; index++) {
            marker.push(new google.maps.Marker({ position: result[i].geometry.location, map:map,tilte :results[i].name
            }))
            map.setCenter(result[0].geometry.location);
            // createMarker(results[index]);
        }
    }
}
function createMarker(place){
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map:map,
        position:place.geometry.location
    });
}

google.maps.event.addDomListener(window, 'load', initialize);