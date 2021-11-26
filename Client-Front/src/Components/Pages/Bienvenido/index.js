import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import React from "react"
import IniciarSesion from '../IniciarSesion';
import Button from 'react-bootstrap/Button'

function Bienvenido() {
    return (
        <Container className="centrar">
            <div class="cuadroexterior">
                <div class="cuadrointerior">
                    <h3>¡Bienvenido {}!</h3>
                    <br/>
                    <Link to="/">
                        <Button className="continuar">Continuar</Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
export default Bienvenido;
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5