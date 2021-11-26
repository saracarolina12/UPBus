import '../Formulario.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


function PedirViaje() {
    return (

        <Container className="centrar">
        <br/>
        <h3 className="letraTitulo">Pedir viaje</h3>
        <br/>
           <Card
                bg='#881739'
                text='black'
                style={{ width: '60%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>Para continuar, introduzca su ubicación</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Ubicación: 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control  placeholder="Ej: Villas Bonaterra, coto 2, calle Llano alto #307" />
                            </Col>
                        </Form.Group>
                        <center>   
                            <Nav.Link className="inactive" componentClass={Link} href="/Mapa" to="/Mapa">Ingresar ubiación actual</Nav.Link>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>


        </Container>
    )
}
export default PedirViaje;
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5