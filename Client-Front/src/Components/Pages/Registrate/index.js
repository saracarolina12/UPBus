import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function Registrarte() {
    return (
        <Container className="formulario">
<<<<<<< HEAD
=======
            <h3 className="registrar">R e g í s t r a t e</h3>
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
           <Card
                bg='#881739'
                text='black'
                style={{ width: '60%'}}
                className="cardborder"
            >
<<<<<<< HEAD
                <Card.Header className="cardheader"><center><h4>Para continuar, introduce tu usuario...</h4></center></Card.Header>
=======
                <Card.Header className="cardheader"><center><h4>¿Eres nuevo en la plataforma?</h4></center></Card.Header>
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
<<<<<<< HEAD
                            ID
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control  placeholder="Introduce tu ID" />
=======
                            Correo
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control  placeholder="Introduce tu correo institucional" />
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
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
<<<<<<< HEAD
                        <center>
                            <a href="/#olvidémicontraseña">¿Olvidaste tu contraseña?</a>
                            <br/><br/>
=======
                        <center>   
                            <Nav.Link className="inactive" componentClass={Link} href="/Olvidemicontraseña" to="/Olvidemicontraseña">¿Olvidaste tu contraseña?</Nav.Link>
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
                            <Button className="iniciarses">Iniciar Sesión</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
<<<<<<< HEAD

export default Registrarte;
=======
export default Registrate;
>>>>>>> 100a576b52fcb5d9d93e56b603c16ebb0504c8e6
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5