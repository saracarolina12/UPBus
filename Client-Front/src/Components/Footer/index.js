import React from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Logo2 from "./Logo2.png"
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Foot() {
    return (
        

        <Container  fluid className="footercolor">
            <br/>
            <Row>
                <Col className="alinear1">
                    <p className="colorU">©️ Todos los derechos reservados</p>
                    {/* <img src={Logo2} alt="Logo" className="imgFoot"/> */}
                </Col>
                <Col className="alinear2">
                    <p className="textFoot">
                        <p className ="colorU">Universidad Panamericana Campus Bonaterra </p>             
                                               Av. Josemaría Escrivá de Balaguer #101    <br/>
                                               Aguascalientes, Ags.                      <br/>   
                                               Teléfono: 449 910 6200                     <br/> 
                    </p>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default Foot;