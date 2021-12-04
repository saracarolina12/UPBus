import React, {useState, useEffect} from "react";
import { Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Markers = () =>{
    const [state, setState] = useState({
        longitude: 0,
        latitude: 0,
    });
      useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function (position){
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
        }, 
        function(error){
            console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
            enableHighAccuracy: true,
        }
        );
    }, []);

    const positions ={lat: state.latitude, lng:state.longitude};
   

    if((state.latitude != 0 && state.longitude != 0)){
        console.log(positions);
        localStorage.setItem('LAT_Curr', JSON.stringify(positions.lat)); //guardo en variable global
        localStorage.setItem('LNG_Curr', JSON.stringify(positions.lng));

    }else{
        console.log("VACÍOOOOOOOOOO, coordenadas de la UP: ");
        localStorage.setItem('LAT_UP', JSON.stringify(21.824206943866415)); //guardo en variable global 
        localStorage.setItem('LNG_UP', JSON.stringify(-102.28368472570067)); //guardo en variable global 
    }

    var redIcon = new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    return(
        <>
        {(state.latitude != 0 && state.longitude != 0) &&
            <Marker position={{lat:state.latitude, lng:state.longitude}} icon={redIcon}/>
        }
        </>
    );
}
export default Markers;