import '../Formulario.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { createUser } from '../../../Api/index.js';
import { useEffect, useState } from 'react';
import { getUser } from '../../../Functions';
import React from 'react';

function Registrate() {
    
    return (
        <Container className="centrar">
            <br/>
            <h3 className="letraTitulo">Regístrate</h3>
            <br/>
           <Card
                bg='#881739'
                text='black'
                style={{ width: '60%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>¿Eres nuevo en la plataforma?</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            ID
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control  placeholder="Introduce tu ID" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Confirma tu contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Ingresa nuevamente tu contraseña" />
                            </Col>
                        </Form.Group>
                        <center>   
                            {/* <Nav.Link className="inactive" componentClass={Link} href="/Olvidemicontraseña" to="/Olvidemicontraseña">¿Olvidaste tu contraseña?</Nav.Link> */}
                            <Button className="iniciarses">Registrar</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Registrate;
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5