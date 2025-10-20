var map = L.map('map').setView([-23.522941, -46.475899], 30);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let userMarker = null;
let userCircle = null;

function success(positiom){
    const lat = positiom.coords.latitude;
    const lon = positiom.coords.longitude;
    const accuracy = positiom.coords.accuracy
    const latlon = [lat, lon];

    if(!userMarker){
        map.setView(latlon, 16);
    }

    if(userMarker){
        userMarker.setLatlng(latlon);
    } else{
        userMarker = L.marker (latlon)
            .addTo (map)
            .bindPopup("Você esta aqui!")
            .openPopup();
    }

    if(userCircle){
        userCircle.setLatlng(latlon).setRadius
    } else {
        userCircle = L.cicle(latlon, {radius: accuracy}).addTo(map);
    }

}
function error (){}

if (navigator.geolocation) {
    const options = {
        enableHighAccurracy: true,
        setTimeout: 5000,
        maximumAge: 0,
    };
    navigator.geolocation.watchPosition(success,error,options);
    } else {
        console.error("Seu navegador não suporta a Geolocalização.");
    }


    
function findMe(){

    navigator.geolocation.getCurrentPosition((location) => {
        console.log (location);
    });
}


//Aula de apresentação
  document.getElementById("Set Marker").addEventListener("click", function () {
    alert("Marcador definido!");
  });

//L.marker([-23.522941, -46.475899]).addTo(map);


