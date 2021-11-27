import L from "leaflet";

export const IconLocation = L.icon({
    iconUrl: require('../Assets/Icono.svg'),
    iconRetinaUrl: require("../Assets/Icono.svg"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
});
