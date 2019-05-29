let map;

function createMap () {
    let option = {
        center: {lat: 43.654, lng: -79.383},
        zoom: 10,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('map'), option);
}