import React from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Logo from "./Logo.png"
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Foot() {
    return (
        

        <Container  fluid className="footercolor">
            <Row>
                <Col><img src={Logo} alt="Logo" className="imgFoot"/></Col>
                <Col className="pegarDerecha"><p className="textFoot">© Universidad Panamericana Campus Bonaterra</p></Col>
            </Row>
        </Container>
    )
}

export default Foot;

