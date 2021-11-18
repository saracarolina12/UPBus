import React from "react"
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.png'

function Navb() {
    return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="colorNavb">
    <Container>
    <Navbar.Brand href="#home"><img img src={logo} alt="Logo" className="imgNavb"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#PedirViaje" className="letra">Pedir viaje</Nav.Link>
            <Nav.Link href="#DarRide">Dar ride</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link exact to="/iniciarsesion" >Iniciar sesión</Nav.Link>
            <Nav.Link exact     to="/registrate" eventKey={2} >Regístrate</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default Navb;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5