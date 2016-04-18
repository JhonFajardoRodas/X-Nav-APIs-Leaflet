
$(document).ready(function() {

  var map = L.map('map').setView([40.2885396922775,-3.7972964655], 13);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([ 40.2838, -3.8215]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br>Aulario 3.')
      .openPopup();



  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }

  map.on('click', onMapClick);
});
