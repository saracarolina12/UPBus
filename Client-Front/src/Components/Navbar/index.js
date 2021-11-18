import React from "react"
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.png'
import IniciarSesion from './Paginas/IniciarSesion';
import Registrar from './Paginas/Registrar';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navb() {
    return (
    
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="colorNavb">
    <Container>
    <Navbar.Brand href="#home"><img img src={logo} alt="Logo" className="imgNavb"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <NavLink exact to="/PedirViaje" className="letra">Pedir viaje</NavLink>
            <NavLink exact to="/DarRide">Dar ride</NavLink>
        </Nav>
        <Nav>
            <NavLink exact to="/IniciarSesion" >Iniciar sesión</NavLink>
            <NavLink exact to="/Registrar" >Regístrate</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default Navb;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5