// Init map
var map = L.map('realMap', {
    zoomControl: false // disable default controls (we add our own)
}).setView([-25.2744, 133.7751], 4); // centered on Australia

// Map tiles (same style as your screenshot)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Custom pin icon generator
function createMarker(className) {
    return L.divIcon({
        className: className,
        html: '<div class="inner"></div>',
        iconSize: [17, 24],
        iconAnchor: [8.5, 24]
    });
}

// Add markers like your screenshot
let redMarkers = [
    [12.8797, 121.7740],   // Philippines
    [-6.2000, 106.8167],   // Indonesia
    [14.0583, 108.2772],   // Vietnam
    [15.8700, 100.9925],   // Thailand
    [-25.2744, 133.7751],  // Australia center
    [-31.9505, 115.8605],  // Perth
    [-33.8688, 151.2093],  // Sydney
    [-37.8136, 144.9631],  // Melbourne
    [-19.2576, 146.8179],  // Townsville
];

// Add red pins
redMarkers.forEach(function (pos) {
    L.marker(pos, { icon: createMarker("custom-marker") }).addTo(map);
});

// Add black marker
L.marker([-27.4698, 153.0251], { icon: createMarker("custom-marker custom-marker-black") }).addTo(map);

// Custom zoom controls on right side (same as screenshot)
L.control.zoom({
    position: 'topright'
}).addTo(map);