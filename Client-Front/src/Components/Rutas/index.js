import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navb from "../Navbar"; 
import Home from "../Pages/Home"
import IniciarSesion from "../Pages/IniciarSesion"
import PedirViaje from "../Pages/PedirViaje"
import Registrate from "../Pages/Registrate";
import DarRide from "../Pages/DarRide";
import Olvidemicontraseña from "../Pages/Olvidemicontraseña";

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
                    <Route path="/Registrate" element = {<Registrate/>} />
<<<<<<< HEAD
                    <Route path="/Olvidemiconstraseña" element={<Olvidemicontraseña/>} />       
=======
                    <Route path="/Olvidemicontraseña" element={<Olvidemicontraseña/>} />       
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
                </Routes>    
            </Router>
        </div>      
    )
}

export default Rutas;