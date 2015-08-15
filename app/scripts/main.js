import React from 'react';
import Router from 'react-router';
import routes from './routes';
import L from 'leaflet';

require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
Router.run(routes, Handler => React.render(<Handler />, document.body));

L.Icon.Default.imagePath =  'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
var map = L.map('map').setView([21.0285,  105.8542], 13);
L.tileLayer('https://a.tiles.mapbox.com/v4/quannguyen89.429b1d2a/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicXVhbm5ndXllbjg5IiwiYSI6ImQ0YWRmNDg1NDMwOTNhZDNhZjQyYWIzY2QzY2M3YjljIn0.PKvdzndFG4TVaQxNfGCZkg#4/21.03/105.85', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'quannguyen89.429b1d2a',
    accessToken: 'pk.eyJ1IjoicXVhbm5ndXllbjg5IiwiYSI6ImQ0YWRmNDg1NDMwOTNhZDNhZjQyYWIzY2QzY2M3YjljIn0.PKvdzndFG4TVaQxNfGCZkg'
}).addTo(map);

var data = [[21.009326, 105.857682], [21.009356, 105.855442], [21.011072, 105.842455],
    [21.027816, 105.852268], [21.054544, 105.820344], [21.042675, 105.791481],
    [21.028501, 105.782255], [21.028309, 105.790856], [21.027705, 105.811117],
    [21.019992, 105.814706]
];

var markers = data.map(function(position) {
    return L.marker(position).addTo(map);
});

markers.forEach(function(marker) {
    marker.bindPopup("<div class='marker-popup'>" +
        "<img src='http://photos1.zillowstatic.com/p_a/ISl2shdefv5q3t0000000000.jpg' />" +
        "<div class='popup-info'>" +
        "<div><b>$6.95M</b></div>" +
        "<div>5 bd, 4.5 ba</div>" +
        "<div> 4,601 sqft</div>" +
        "</div>" +
        "</div>");
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
});
