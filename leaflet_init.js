var map = L.map('map',{
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    crs: L.CRS.Simple
}).setView(L.latLng(-7360.0, 5193.0), 2);

L.tileLayer('tiles/{z}/{x}/{y}.png', {
    minZoom: -4,
    maxZoom: 2,
    maxNativeZoom: 2,
    minNativeZoom: -2,
    noWrap: true,
    attribution: 'Bruh.',
    className: 'world_tiles'
}).addTo(map);
