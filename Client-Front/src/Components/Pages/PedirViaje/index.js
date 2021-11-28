import './PedirViaje.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { getUser, updateUser} from '../../../Functions';
import { useState, useEffect } from 'react';


function PedirViaje() {
    const [user, setUser] = useState();
    const [location, setLocation] = useState('');
    const updateUser = async (Location) => {
        await updateUser(Location);
    }

    useEffect(() => {
        //console.log('todos');
        const fetchData = async() => {
        const result = await getUser();
        //console.log('ferched Data', result)
        setUser(result)
        };
        fetchData();
    }, []); //esto se corre la priemra vez que cargas la pagina porque esta vacio
                //si esta vacio no se recargara automaticamente
    return (

        
        <Container className="centrar">
        <br/>
        <h3 className="iniciar">Pedir viaje</h3>
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
                            <Form.Control  placeholder="Ej: Villas Bonaterra, coto 2, calle Llano alto #307" 
                            onChange={(event) => {
                                setLocation(event.target.value);
                            }}/>
                            </Col>
                        </Form.Group>
                        <center>   
                            <Nav.Link 
                                className="inactive"
                                componentClass={Link} 
                                href="/View" 
                                to="/View"
                                onClick={()=> updateUser(Location)}
                                >Ingresar ubiación actual</Nav.Link>
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