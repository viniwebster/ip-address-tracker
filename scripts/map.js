export function addPopUp(lat, lng){
    var map = L.map('map', {
        center: [lat, lng],
        zoom: 13
    });
        
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([lat, lng]).addTo(map);

    marker.bindPopup(`lat ${lat}<br> lng ${lng}`).openPopup();
}

