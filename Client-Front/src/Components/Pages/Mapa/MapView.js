import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import {useLocation, useNavigate} from "react-router-dom";
import '../Mapa/Estilo.css';
import { createUser, SearchUser, LastIDs, updatePassword, NewLocation} from '../../../Api/index.js';
import { useState, useEffect } from 'react';


const MapView = (props)=>{

    var CurrLAT = JSON.parse(localStorage.getItem('LAT_Curr')), CurrLNG = JSON.parse(localStorage.getItem('LNG_Curr'));
    var Curr_Address = JSON.parse(localStorage.getItem('CurrAddress'))


    return (
        
        <div>
            <br/>
            <br/>
            <center><h3 className="letraTitulo">¡Aquí te encuentras en este momento!</h3></center>
            <br/>
            {/* <MapContainer center={{lat:"21.824206943866415", lng:"-102.28368472570067"}} zoom={16} > */}
            <MapContainer center={{lat:CurrLAT, lng:CurrLNG}} zoom={16} >
            <TileLayer attribution='&copy; 
            <a href="http://osm.org/copyright">OpenStreetMap</a> 
            contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />
            
        </MapContainer>
        <h1 className="aaaa1">Instrucciones:</h1>
        <p className="aaaa"><b>1. Si tu localización no aparece, pese a que permitiste el acceso a tu ubicación, se debe configurar manualmente.</b></p>
        <p className="aaaa"><b>2. Entrar a Configuración de privacidad de ubicación localizado en Ajustes. </b></p>
        <p className="aaaa"><b>3. Cambiar el botón a Activado en Permitir que las aplicaciones accedan a tu dispositivo.</b></p>
        <p className="aaaa"><b>4. Borrar el Historial de ubicaciones.</b></p>
        <p className="aaaa"><b>5. Activar la opción de Mapas en Elegir que aplicaciones pueden acceder a tu ubicación excata</b> </p>
        <p className="aaaa"><b>6. Ingresar a Establecer como predeterminado, buscando tu ubicación en el mapa y fijandola.</b> </p>
        <p className="aaaa"><b>7. Volver a la página y refrescarla.</b></p>
        <br/><br/><br/>
        </div>
        
    );
};

export default MapView;