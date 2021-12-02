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
import Swal from 'sweetalert2';
import Forgot from '../Forgot'

function CodigoVerif() {
    const [users, setUsers] = useState();
    const [Uno, setUno] = useState();
    const [Dos, setDos] = useState();
   //OnChange
    const UnoChange = (x) =>{  
       const {value} = x.target;
       setUno(value);
    }
    const DosChange = (x) =>{  
        const {value} = x.target;
        setDos(value);
     }
    const onSubmitHandler = async (x) => {
        if(Uno && Dos){
            if(Uno == Dos){
                for(let i=0; i<users.length; i++){
                    
                }
                let timerInterval
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha restablecido tu contraseña correctamente.',
                    timer: 1400,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    willClose: () => {  
                        clearInterval(timerInterval)
                    }
                }).then(function() {
                    window.location = "/IniciarSesion";
                });
            }else{
                alert('Las contraseñas no coinciden.\nIntenta nuevamente.')
            }
        }else{
            alert('Campo Vacío.\nIntenta nuevamente.')
        }
    }

    useEffect(() => {
        //console.log('todos');
        const fetchData = async() => {
        const result = await getUser();
        setUsers(result)
        //console.log('ferched Data codigoverif', result.length)
        };
        fetchData();
    }, []);
    return (
        <Container className="centrar">
        <br/>
        <h3 className="letraTitulo">Restablecer contraseña</h3>
        <br/>
           <Card
                bg='#881739'
                text='black'
                style={{width: '70%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>Necesitarás una contraseña</h4></center></Card.Header>
                <Card.Body className="cardbody">
                <Card.Text>
                   <Form onSubmit={onSubmitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={UnoChange} type="password" placeholder="Ingresa tu contraseña" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Confirma tu contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={DosChange} type="password" placeholder="Ingresa nuevamente tu contraseña" />
                            </Col>
                        </Form.Group>
                        <center>   
                            <Button onClick={onSubmitHandler} className="iniciarses">Restablecer contraseña</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default CodigoVerif;
