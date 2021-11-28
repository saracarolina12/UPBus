import '../Formulario.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { createUser, SearchUser } from '../../../Api/index.js';
import { useEffect, useState } from 'react';
import { getUser } from '../../../Functions';
import React from 'react';


function IniciarSesion() {
    const [id, setid] = useState();
    const [passw, setpassw] = useState();
    const [state, setState] = useState();

   //OCchange
    const IDchange = (x) =>{  //cambios ID
       const {value} = x.target;
    //    console.log(value);
       setid(value);
    }
    const PasswChange = (x) =>{
        const {value} = x.target;
        // console.log(value);
        setpassw(value);
    }

    const onSubmitHandler = async () => {
        if(id && passw){
            if(!isNaN(id)){
                //lo busca en la base
                //si existe: revisa que la contraseña coincida:
                    //si coincide: inicia sesión
                    //si no: error
                //si no existe: error
                const search = await SearchUser({ID: id});
                console.log(search);
            }else{
                alert(`Tu ID debe estar compuesto únicamente por números\nIntenta de nuevo.`)
            }
        }else{
            alert(`¡Campo vacío!\nIntenta de nuevo.`)    
        }
    }
    return (
        <Container className="centrar">
        <br/>
        <h3 className="letraTitulo">Iniciar sesión</h3>
        <br/>
           <Card
                bg='#881739'
                text='black'
                style={{ width: '50%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>Para continuar, introduce tu usuario...</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            ID
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={IDchange} placeholder="Introduce tu ID" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={PasswChange} type="password" placeholder="Ingresa tu contraseña" />
                            </Col>
                        </Form.Group>
                        <center>   
                            <Nav.Link className="inactive" componentClass={Link} href="/Forgot" to="/Forgot">¿Olvidaste tu contraseña?</Nav.Link>
                            <Button onClick={onSubmitHandler} className="iniciarses">Iniciar Sesión</Button>
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