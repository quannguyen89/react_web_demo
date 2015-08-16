import React from 'react';
import L from 'leaflet';
import ItemActions from '../actions/itemActions';
import ItemStore from '../stores/houseStore';
import reactMixin from 'react-mixin';
import Reflux from 'reflux';


require('leaflet.label');
require('leaflet/dist/leaflet.css');

class Map extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this.listenTo(ItemStore, this.onStatusChange);
        ItemActions.loadMapData();
    }

    componentDidUpdate() {
        if (this.state.data) {
            L.Icon.Default.imagePath =  'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
            var map = L.map(React.findDOMNode(this)).setView([21.0285,  105.8542], 13);
            L.tileLayer('https://a.tiles.mapbox.com/v4/quannguyen89.429b1d2a/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicXVhbm5ndXllbjg5IiwiYSI6ImQ0YWRmNDg1NDMwOTNhZDNhZjQyYWIzY2QzY2M3YjljIn0.PKvdzndFG4TVaQxNfGCZkg#4/21.03/105.85', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'quannguyen89.429b1d2a',
                accessToken: 'pk.eyJ1IjoicXVhbm5ndXllbjg5IiwiYSI6ImQ0YWRmNDg1NDMwOTNhZDNhZjQyYWIzY2QzY2M3YjljIn0.PKvdzndFG4TVaQxNfGCZkg'
            }).addTo(map);

            var data = this.state.data;

            var myIcon = L.icon({
                iconUrl: 'images/circle-20.png',
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                labelAnchor: [6, 0] // as I want the label to appear 2px past the icon (10 + 2 - 6)
            });

            var markers = data.map(function(position) {
                return L.marker(position, { icon: myIcon }).bindLabel("<strong>$6.95M</strong>",  { noHide: true, direction: 'auto' }).addTo(map);
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
        }
    }

    onStatusChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div id="map" className="col-md-8">
            </div>
        );
    }
}

reactMixin(Map.prototype, Reflux.ListenerMixin);
export default Map;
