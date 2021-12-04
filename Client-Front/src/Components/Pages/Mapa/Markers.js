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
   

    if((state.latitude != 0 && state.longitude != 0)){
        console.log(positions);
        localStorage.setItem('LAT_Curr', JSON.stringify(positions.lat)); //guardo en variable global
        localStorage.setItem('LNG_Curr', JSON.stringify(positions.lng));

    }else{
        console.log("VACÍOOOOOOOOOO, coordenadas de la UP: ");
        localStorage.setItem('LAT_UP', JSON.stringify(21.824206943866415)); //guardo en variable global 
        localStorage.setItem('LNG_UP', JSON.stringify(-102.28368472570067)); //guardo en variable global 
    }
    return(
        <>
        {(state.latitude != 0 && state.longitude != 0) &&
            <Marker position={{lat:state.latitude, lng:state.longitude}} icon={IconLocation}/>
        }
        </>
    );
}
export default Markers;