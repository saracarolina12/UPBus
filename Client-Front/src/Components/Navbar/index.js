import React from "react"
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.png'
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";

function CS (){
    localStorage.setItem("IDUsuario", JSON.stringify(0)); 
}


function Navb() {
    if (localStorage.getItem("IDUsuario") == "0") {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="colorNavb">
            <Container>
            <Navbar.Brand componentClass={Link} href="/" to="/"><img img src={logo} alt="Logo" className="imgNavb"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="me-auto">
                    <Nav.Link componentClass={Link} href="/PedirViaje" to="/PedirViaje">Pedir viaje</Nav.Link>
                    <Nav.Link componentClass={Link} href="/DarRide" to="/DarRide">Dar ride</Nav.Link>
                </Nav> */}
                 <Col className="izq"><p className="textFoot"></p></Col>
                <Nav>
                    <Nav.Link componentClass={Link} href="/IniciarSesion" to="/IniciarSesion">Iniciar sesión</Nav.Link>
                    <Nav.Link componentClass={Link} href="/Registrate" to="/Registrate" eventKey={2} >Regístrate</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
    else {
             return (
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="colorNavb">
            <Container>
            <Navbar.Brand componentClass={Link} href="/" to="/"><img img src={logo} alt="Logo" className="imgNavb"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link componentClass={Link} href="/View" to="/View">Pedir viaje</Nav.Link>
                    <Nav.Link componentClass={Link} href="/DarRide" to="/DarRide">Dar ride</Nav.Link>
                </Nav> 
                 <Col className="izq"><p className="textFoot"></p></Col>
                <Nav>
                    <Nav.Link componentClass={Link} href="/IniciarSesion" to="/IniciarSesion" onClick={CS}>Cerrar sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            )
    }
}

export default Navb;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5
//https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem

