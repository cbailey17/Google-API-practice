// Initialize and add the map
function initMap() {
  // The location of Uluru
  const sanDiego = { lat: 32.7157, lng: -117.1611 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: sanDiego,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: sanDiego,
    map: map,
  });
}
