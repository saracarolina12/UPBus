import React from "react"
import './Titulo.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Primera from './1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Segunda from './1_Carrusel.jpg'
import Tercera from './2_Carrusel.jpg'
import Cuarta from './3_Carrusel.jpeg'

function Titulo() {
    return (
        <Container className="contenedorTitulo estiloTitulo">
            <h1 className="UpBus">UpBus</h1>
            <h4 className="sub">¡Un Uber universitario!</h4>
            <img img src={Primera} alt="Primera imagen home" className="imgTitulo" />
{/* 
            <Carousel>
                <Carousel.Item interval={1600}>
                    <img
                    className="imgTitulo"
                    src={Primera}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1600}>
                    <img
                    className="imgTitulo"
                    src={Segunda}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1600}>
                    <img
                    className="imgTitulo"
                    src={Tercera}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel> */}
        </Container>
    )
}

export default Titulo;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5