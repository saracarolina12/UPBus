import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
function DarRide() {
    return (
        <Container className="DarRide">
           <br/>
           <h3 className="titulo">Dar ride</h3>
           <p className="parr">Selecciona la ubicación por la que puedes pasar</p>
           <Card style={{ width: '50%' }}>
           <Card.Header className="cardheader"><center><h5>Id de usuario</h5></center></Card.Header>        
            <Card.Body className="cardbody">
            <Card.Text>Ubicación</Card.Text>
            <Button variant="primary" className="buttonbg">Aceptar viaje</Button>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default DarRide;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5