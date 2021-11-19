import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function IniciarSesion() {
    return (
        <Container className="formulario">
           <Card
                bg='#881739'
                text='black'
                style={{ width: '60%'}}
            >
                <Card.Header className="cardheader"><center><h4>Iniciar Sesión</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Correo
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control  placeholder="email@example.com" />
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
                        <center>
                             <Button className="iniciarses">Iniciar Sesión</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>

           
        </Container>
    )
}

export default IniciarSesion;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5