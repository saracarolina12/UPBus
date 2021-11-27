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


function Olvidemicontraseña() {
    const [correo, setCorreo] = useState();
    const [state, setState] = useState();
   //OnChange
    const correoChange = (x) =>{  
       const {value} = x.target;
       console.log(value);
       setCorreo(value);
    }
   
    const onSubmitHandler = async (x) => {
        if(correo){
            if(correo.substring(8,correo.length) != 'up.edu.mx'){       //verifica que sea correo institucional
                alert('Ingresa un correo institucional.\nIntenta nuevamente.')
            }else{
                x.preventDefault();
                var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", codigo = "", y = abc.length
                for (var i=1; i<8; i++)
                codigo += abc[Math.floor(Math.random()*y)];
                console.log(codigo)
    
               
            }
        }else{
            alert('Ingresa un correo.')
        }
    }
    return (
        <Container className="centrar">
        <br/>
        <h3 className="letraTitulo">¿Olvidaste tu contraseña?</h3>
        <br/>
           <Card
                bg='#881739'
                text='black'
                style={{ width: '50%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>Recibirás un código en tu correo</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Correo 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={correoChange} placeholder="Introduce tu correo institucional" />
                            </Col>
                        </Form.Group>

                        {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                            </Col>
                        </Form.Group> */}
                        <center>   
                            <Button onClick={onSubmitHandler} className="iniciarses">Enviar código</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default Olvidemicontraseña;
