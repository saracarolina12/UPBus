import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navb from "../Navbar"; 
import Home from "../Pages/Home"
import IniciarSesion from "../Pages/IniciarSesion"
import PedirViaje from "../Pages/PedirViaje"

const Rutas = () => {
    return (
        <div>
            <Navb />
            <Router>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/IniciarSesion" component = {IniciarSesion} />
                    {/* <Route exact path="/Registrar" component = {Registrar} /> */}
                    <Route exact path="/PedirViaje" component = {PedirViaje} />
                    {/* <Route exact path="/DarRide" component = {DarRide} /> */}
                </Switch>
            </Router>
        </div>      
    )
}

export default Rutas;