import L from 'leaflet';
/* import img from './obstaculo2.png' */
const icon = new L.Icon({
    iconUrl: './assets/obstaculo.svg',
    iconRetinaUrl: './assets7obstaculo.svg',
    /* iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null, */
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

const markerIcon = new L.Icon({
    iconUrl: './assets/Pin.png',
    iconRetinaUrl: './assets/Pin.png',
    /* iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null, */
    iconSize: new L.Point(30, 35),
    className: 'leaflet-div-icon'
});

export { icon, markerIcon };