var map = L.map('map',{
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    crs: L.CRS.Simple
}).setView(L.latLng(0.0, 0.0), 1);

L.tileLayer('tiles/{z}/{x}/{y}.png', {
    minZoom: -5,
    maxZoom: 8,
    maxNativeZoom: 2,
    minNativeZoom: -2,
    noWrap: true,
    attribution: 'Bruh.',
    className: 'world_tiles'
}).addTo(map);
