var bounds = [[-400,400],[-500,500]];

L.rectangle([[0, 0], [-500, 100]], {color: "#ff0000", weight: 1}).addTo(map);
L.rectangle(bounds,
    {
        color: "#00ff00",
        weight: 14
    }
).addTo(map);
L.marker([-700,700], {icon: i_redLeaf}).addTo(map);
L.marker([-700,800], {icon: i_greenLeaf}).addTo(map);
L.circle([-900,500], {radius: 50}).addTo(map);