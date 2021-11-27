import React, {useState, useEffect} from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { Link } from 'react-router-dom';



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
    console.log(positions);
    return(
        <div>
            <h1>Geolocation</h1>
            <p>longitude: {state.longitude}</p>
            <p>Latitude: {state.latitude}</p>
            <Link to={{
                pathname: "/View",
                state,
            }}>Ver mi Ubicacion</Link>
        </div>,
        <Marker position={{lat:state.latitude, lng:state.longitude}} icon={IconLocation}/>


    );
}
export default Markers;