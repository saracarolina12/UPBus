import React from "react"
import Container from 'react-bootstrap/Container'
import Logo from "./Logo.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Foot() {
    return (
        <Container>
            <Row>
                <Col><img src={Logo} alt="Logo" className="imgFoot"/></Col>
                <Col><p>© Universidad Panamericana Campus Bonaterra</p></Col>
            </Row>
        </Container>
    )
}

export default Foot;

