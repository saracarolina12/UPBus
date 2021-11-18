import { BrowserRouter as Router, Switch } from "react-router-dom";
import IniciarSesion from "../../Paginas/IniciarSesion";
import Registrar from "../../Paginas/Registrar";
import Navb from "../Navbar"; 
const Rutas = () => {
    return (
        <div>
            <Navb />
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/IniciarSesion" component = {IniciarSesion} />
                <Route exact path="/Registrar" component = {Registrar} />
                <Route exact path="/PedirViaje" component = {PedirViaje} />
                <Route exact path="/DarRide" component = {DarRide} />

            </Switch>
        </div>      
    )
}

