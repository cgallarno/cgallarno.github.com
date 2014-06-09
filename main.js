//init the map
var map = L.mapbox.map('map', 'cgallarno.ifakj04j', {
  zoomControl: false
}).setView([39.2002237,-77.4959254], 11);

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

var marker = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -77.4959254,
          39.2002237 
        ]
    },
    properties: {
        title: 'Lost Creek Winery',
        description: '43277 Spinks Ferry Road Leesburg, VA 20176',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/foundations/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#e06d5f',
        //'marker-symbol': 'winery'
    }
}).addTo(map);

marker.eachLayer(function(m) {
  m.openPopup();
});

// Disable tap handler, if present.
if (map.tap) map.tap.disable();