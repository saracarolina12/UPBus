import React from "react"
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.png'
import { Link } from "react-router-dom";

function Navb() {
    return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="colorNavb">
    <Container>
    <Navbar.Brand componentClass={Link} href="/" to="/"><img img src={logo} alt="Logo" className="imgNavb"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link componentClass={Link} href="/PedirViaje" to="/PedirViaje">Pedir viaje</Nav.Link>
            <Nav.Link componentClass={Link} href="/DarRide" to="/DarRide">Dar ride</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link componentClass={Link} href="/IniciarSesion" to="/IniciarSesion">Iniciar Sesion</Nav.Link>
            <Nav.Link componentClass={Link} href="/Registrate" to="/Registrate" eventKey={2} >Regístrate</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default Navb;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5
//https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem

