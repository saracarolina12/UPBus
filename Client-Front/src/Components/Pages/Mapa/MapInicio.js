import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const MapInicio =()=>{
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
    return (
    <div>
        <h1>Geolocation</h1>
        <p>longitude: {state.longitude}</p>
        <p>Latitude: {state.latitude}</p>
        <Link to={{
            pathname: "/View",
            state,
        }}>Ver mi Ubicacion</Link>
    </div>


    );

};
export default MapInicio;