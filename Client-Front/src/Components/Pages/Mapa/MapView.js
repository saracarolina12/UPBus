import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import {useLocation, useNavigate} from "react-router-dom"

const MapView = (props)=>{
    //  const [state, setState] = useState({
    //      currentLocation: {lat: 21.824206943866415, lng:-102.28368472570067},
    //      zoom: 13,
    //  });

    //  const location = useLocation();
    //  const navigate = useNavigate();

    //  useEffect(() => {
    //    if ("location.state.latitude && location.state.longitude"){            
    //      const currentLocation = {
    //            lat: "location.state.latitude",
    //            lng: "location.state.longitude",
              
    //          };
            
            
    //          console.log(state);
    //          setState({
    //            ...state,  
    //            currentLocation,
    //          });

    //          navigate({
    //            pathname: "/View",
    //            state: {},
    //          });
    //      }
    //    }, [location]);



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




    return (
        <MapContainer center={positions} zoom={13} >
            <TileLayer attribution='&copy; 
            <a href="http://osm.org/copyright">OpenStreetMap</a> 
            contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />
            
        </MapContainer>
    );
};

export default MapView;