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

        <div className ="alinearDiv">
            <h3 className="letra2">¿Cómo funciona?</h3>
            <p>
               El mapa te muestra tu ubicación actual, si no es así, regresa a pedir viaje
               y escribe la ubicación en dónde te encuentras.
            </p>
            <p>   
               Una vez que hayas ingresado tu ubicación, deberás esperar a que un pasajero
               la vea para saber donde te recogerá. <b>¡No olvides revisar tu correo institucional, <br/>
               recuerda que por ahí se enviará el nombre de la persona que te recogerá!</b>
            </p>
            <br/>
            <br/>
            <h3 className="letra2">Configuración del mapa</h3>
            <p>
               Algunas computadoras no tienen la accesibilidad de saber tu ubicación en todo momento,
               no te preocupes, aquí te explicaremos <b>7 sencillos pasos </b >que <br/> debes de seguir 
               para que el mapa funcione
            </p>
            <p class="alinearDiv">   
                1. Entrar a Configuración de privacidad de ubicación localizado en Ajustes. <br/>
                2. Cambiar el botón a Activado en Permitir que las aplicaciones accedan a tu dispositivo. <br/>
                3. Borrar el Historial de ubicaciones. <br/>
                4. Activar la opción de Mapas en Elegir que aplicaciones pueden acceder a tu ubicación excata. <br/>
                5. Ingresar a Establecer como predeterminado, buscando tu ubicación en el mapa y fijandola. <br/>
                6. Volver a la página y refrescarla. <br/>
            </p>
        </div>
        </div>
        
    );
};

export default MapView;