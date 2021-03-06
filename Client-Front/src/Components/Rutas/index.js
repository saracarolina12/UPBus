import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navb from "../Navbar"; 
import Home from "../Pages/Home"
import IniciarSesion from "../Pages/IniciarSesion"
import PedirViaje from "../Pages/PedirViaje"
import Registrate from "../Pages/Registrate";
import DarRide from "../Pages/DarRide";
import MapView from "../Pages/Mapa/MapView.js";
import MapInicio from "../Pages/Mapa/MapInicio";
import Forgot from "../Pages/Forgot"
import CodigoVerif from "../Pages/CodigoVerif";
import Bienvenido from "../Pages/Bienvenido";

const Rutas = () => {
    return (
        <div>
            <Router>
                <Navb /> 
                <br/>
                <br/>   
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/PedirViaje" element = {<PedirViaje/>}/>
                    <Route path="/Bienvenido" element={<Bienvenido/>} />  
                    <Route path="/Mapa"  element = {<MapInicio/>}/>
                    <Route path="/View"  element = {<MapView/>}/>
                    <Route path="/DarRide" element = {<DarRide />} />
                    <Route path="/IniciarSesion" element = {<IniciarSesion/>} />
                    <Route path="/Registrate" element = {<Registrate/>} />
                    <Route path="/Forgot" element={<Forgot/>} />     
                    <Route path="/CodigoVerif" element={<CodigoVerif/>} />  
                </Routes>    
            </Router>
             
        </div>      
    )
}

export default Rutas;