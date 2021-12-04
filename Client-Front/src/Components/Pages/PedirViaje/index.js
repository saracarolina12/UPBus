import './PedirViaje.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { getUser} from '../../../Functions';
import { createUser, SearchUser, LastIDs, updatePassword, NewLocation} from '../../../Api/index.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'


function PedirViaje() {
    const [user, setUser] = useState();
    const [location, setLocation] = useState('');

    const LocationChange = async(x) => {
        const {value} = x.target;
        setLocation(value);
    }

    const onSubmitHandler = async (x) => {
        localStorage.setItem('UserLocation', JSON.stringify(location)); //guardo en variable global de la ubicación del usuario
        NewLocation({ID:JSON.parse(localStorage.getItem('ID')), Location: JSON.parse(localStorage.getItem('UserLocation'))})
    }

    useEffect(() => {
        const fetchData = async() => {
        const result = await getUser();
        setUser(result)
        };
        fetchData();
    }, []); 
    return (

        
        <Container className="centrar">
        <br/>
        <Link to="/Bienvenido">
                <Button className="regresar">Regresar al menú</Button>
            </Link>
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
                            onChange={LocationChange}/>
                            </Col>
                        </Form.Group>
                        <center>   
                            <Nav.Link 
                                className="inactive"
                                componentClass={Link} 
                                href="/View" 
                                to="/View"
                                onClick={onSubmitHandler}
                                >Ingresar ubicación actual</Nav.Link>
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