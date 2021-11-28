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
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

function Olvidemicontraseña() {
    const [correo, setCorreo] = useState();
    const [state, setState] = useState();
   //OnChange
    const correoChange = (x) =>{  
       const {value} = x.target;
       setCorreo(value);
    }

    const onSubmitHandler = async (x) => {
        if(correo){
            if(correo.substring(8,correo.length) !== 'up.edu.mx'){       //verifica que sea correo institucional
                alert('Ingresa un correo institucional.\nIntenta nuevamente.')
            }else{
                x.preventDefault();
                
                var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",  y = abc.length ,codigo="";
                for (var i=1; i<8; i++)
                codigo += abc[Math.floor(Math.random()*y)];
                console.log(codigo)

                //enviar correo
                var id = correo.substring(0,7)
                var templateParams = {
                    CODIGO: codigo,
                    ID: id,
                    CORREO: correo,
                };
                x.preventDefault(); 
                emailjs.send(
                    'service_0e2t94h',
                    'template_pvx6uoh', 
                    templateParams,
                    'user_PcffbjIoKIDfhVAMbcRHK'
                ).then(res=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        width: 650,
                        title: `Se ha enviado un correo de verificación a ${correo}`,
                        // showConfirmButton: true,
                        timer: 2500,
                        // confirmButtonText: '<a href="/CodigoVerif">Continuar</a>',
                        // confirmButtonText: 'Continuar',
                        // confirmButtonColor: '#6CBB30',
                        preConfirm: (ok) => {
                            Swal.fire({
                                title: 'Ingresa tu código de verificación',
                                input: 'text',
                                confirmButtonText: 'Restaurar contraseña',
                                confirmButtonColor: '#6CBB30',
                                preConfirm: (validar) => {
                                    if(validar == codigo){
                                        let timerInterval
                                            Swal.fire({
                                            title: 'Cargando...',
                                            timer: 1000,
                                            timerProgressBar: true,
                                            didOpen: () => {
                                                Swal.showLoading()
                                            },
                                            willClose: () => {  
                                                clearInterval(timerInterval)
                                            }
                                            }).then(function() {
                                                window.location = "/CodigoVerif";
                                            });
                                    }
                                }
                             })
                        }
                        
                      })
                    console.log(res);
                }).catch(err=>console.log("ERRORRR:\n",err));
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
                   <Form onSubmit={onSubmitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Correo 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name="correo" onChange={correoChange} placeholder="Introduce tu correo institucional" />
                            </Col>
                        </Form.Group>
                        <center>   
                            <Button  onClick={onSubmitHandler} className="iniciarses">Enviar código</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
    
}

export default Olvidemicontraseña;

