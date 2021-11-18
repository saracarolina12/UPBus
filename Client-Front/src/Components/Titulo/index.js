import React from "react"
import './Titulo.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Primera from './1.jpg'
function Titulo() {
    return (
        <Container className="contenedorTitulo estiloTitulo">
            <h1 className="UpBus">UpBus</h1>
            <h4 className="sub">¡Un Uber universitario!</h4>
            <img img src={Primera} alt="Primera imagen home" className="imgTitulo" />
        </Container>
    )
}

export default Titulo;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5