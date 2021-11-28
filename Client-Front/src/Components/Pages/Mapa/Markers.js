import React, {useState, useEffect} from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";


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
        <Marker position={{lat:state.latitude, lng:state.longitude}} icon={IconLocation}/>
    );
}
export default Markers;