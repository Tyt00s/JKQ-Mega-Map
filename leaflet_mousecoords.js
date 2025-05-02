const coordsDiv = document.getElementById('mouse-coords');

map.on('click', function (e) {
    // Left Click
    if (e.originalEvent.button === 0) {
        const y = e.latlng.lat.toFixed(2);
        const x = e.latlng.lng.toFixed(2);
        coordsDiv.innerHTML = `Y: ${y}, X: ${x}`;

        // Coords div position
        coordsDiv.style.display = "block";
        coordsDiv.style.left = `${e.originalEvent.clientX}px`;
        coordsDiv.style.top = `${e.originalEvent.clientY}px`;
    }
});