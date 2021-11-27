import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";


const Markers = () =>{
    return(
        <Marker position={{lat:"21.824206943866415", lng:"-102.28368472570067"}} icon={IconLocation}/>


    );
}
export default Markers;