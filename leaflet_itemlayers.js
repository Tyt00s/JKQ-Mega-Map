// this is just something chatgpt spit out, i might use that later once all icons are in place

<input type="checkbox" id="toggleH" checked> Show H Group
<input type="checkbox" id="toggleF" checked> Show F Group
<div id="map" style="height: 400px;"></div>

<script>

  // Place markers first
  const i_H1 = L.marker([51.5, -0.09]).addTo(map);
  const i_H2 = L.marker([51.51, -0.08]).addTo(map);
  const i_F1 = L.marker([51.49, -0.1]).addTo(map);
  const i_F2 = L.marker([51.48, -0.11]).addTo(map);

  // Manually group them after placing
  const groupH = [i_H1, i_H2];
  const groupF = [i_F1, i_F2];

  // Toggle functions
  function toggleMarkers(markers, show) {
    markers.forEach(marker => {
      show ? marker.addTo(map) : map.removeLayer(marker);
    });
  }

  // Checkbox listeners
  document.getElementById('toggleH').addEventListener('change', e => {
    toggleMarkers(groupH, e.target.checked);
  });

  document.getElementById('toggleF').addEventListener('change', e => {
    toggleMarkers(groupF, e.target.checked);
  });
</script>


const groupStones = [];

const i_stone = L.icon({
  iconUrl: 'icons/stones/stone100.png',
  iconSize: [64, 64],
  iconAnchor: [32, 32],
  popupAnchor: [0, -32]
});

// Coordinates for all stone markers
const stoneCoords = [
  [-14895, 1209],
  [-14021, 168],
  [-12332, 577],
  [-12133, 1012]
];

// Create and add all at once
stoneCoords.forEach(coords => {
  const marker = L.marker(coords, { icon: i_stone }).addTo(map);
  groupStones.push(marker);
});