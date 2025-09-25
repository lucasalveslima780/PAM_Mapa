var map = L.map('map').setView([-23.522941, -46.475899], 30);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function findMe(){
    if(!navigator.geolocation){
        alert("Navegador não compativel ou necessita atualização")
            return;
    };

    navigator.geolocation.getCurrentPosition((location) => {
        console.log (location);
    });
}

L.marker([-23.522941, -46.475899]).addTo(map);