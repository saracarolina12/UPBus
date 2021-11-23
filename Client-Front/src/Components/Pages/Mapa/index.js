import React, { useState, useEffect } from "react";
import './MapaUbi.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import {Link, useLocation} from "react-router-dom"
import Container from "react-bootstrap/esm/Container";
import Icono from './Icono.png'


const Mapa = () =>{
    const [state, setState] = useState({
        longitude: 0,
        latitude: 0,
    });

    const location = useLocation()
    console.log(location)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function(position){
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function (error) {
                console.log(error)
            },
            {
                enableHighAccuracy: true
            }
            );
    });

const position = [21.8240054, -102.2848179]
    return (
    <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <h1>Geolocation</h1>
        <p>Longitude: {state.longitude}</p>
        <p>Latitude: {state.latitude}</p> */}
        <h1 className="letra">Ingrese su localización actual</h1>
        {/* <Link to={{
            pathname: '/map',
            state
        }}>Ver mi localización</Link> */}
      {/*<MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={false}> */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
            <Marker position={{lat: "21.82412500", lng: " -102.28398800"}}>
            <Popup>
                <img img src={Icono} alt="Icono" className="imgIcono"/> Icono de destino <br /> Aquí me encuentro!
            </Popup>
            </Marker>
        </MapContainer>
     </Container>
     )
};



export default Mapa;



