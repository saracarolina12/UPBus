import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Titulo from "./Titulo";
import ContenidoHome from "./Contenido";
function Home() {
    return (
        <Container className="Titulo">
           <Titulo />
           <ContenidoHome />
        </Container>
    )
}

export default Home;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5