import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import React from "react"
import Button from 'react-bootstrap/Button'

function Bienvenido() {
    return (
        <Container className="centrar">
                    <br/> <br/><br/><br/><br/>
                    <h3>¡Bienvenido!</h3>
                    <h4><i>¿Qué te gustaría hacer?</i></h4>
                    <br/>
                    <Link to="/PedirViaje">
                        <Button className="continuar">Pedir Viaje</Button>
                    </Link>
                    <br/>
                    <Link to="/DarRide">
                        <Button className="continuar">Dar Ride</Button>
                    </Link>
        </Container>
    )
}
export default Bienvenido;
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5