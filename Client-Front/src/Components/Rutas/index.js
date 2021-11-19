import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navb from "../Navbar"; 
import Home from "../Pages/Home"
import IniciarSesion from "../Pages/IniciarSesion"
import PedirViaje from "../Pages/PedirViaje"
import Registrate from "../Pages/Registrate";
import DarRide from "../Pages/DarRide";
import Olvidemicontraseña from "../Pages/IniciarSesion/Olvidemiconstraseña";

const Rutas = () => {
    return (
        <div>
            <Router>
            <Navb />    
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/PedirViaje" element = {<PedirViaje/>} />
                    <Route path="/DarRide" element = {<DarRide />} />
                    <Route path="/IniciarSesion" element = {<IniciarSesion/>} />
                    <Route path="/Registrarte" element = {<Registrate/>} />
                    <Route path="/Olvidemiconstraseña" element={<Olvidemicontraseña/>} />       
                </Routes>    
            </Router>
        </div>      
    )
}

export default Rutas;