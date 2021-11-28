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
import Swal from 'sweetalert2'


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
                var flag = false, index=-1;
                const search = await SearchUser({ID: id});
                for(let i=0; i<search.data.length; i++){
                    let len = (search.data[i].ID).toString().length
                    if(id == search.data[i].ID && id.length == len){
                        flag = true;
                        index = i;
                        break;
                    }
                }
                // console.log(search.data[index].password);
                if(flag === true && passw === search.data[index].password){ //lo encontró
                    // alert('usario encontrado y contraseña correcta')
                    let timerInterval
                    Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `¡Bienvenido ${id}!`,
                            timer: 1200,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                            },
                            willClose: () => {  
                                clearInterval(timerInterval)
                            }
                        }).then(function() {
                            window.location = "/Menu";
                        });
                }else{
                    if(flag === false){ //no encontró el usuario
                        alert('Lo sentimos, tu usuario no existe.\n¡Te invitamos a registrarte!')
                    }
                    else if(passw !== search.data[index].password){ //no coincide la contraseña
                        alert('Contraseña incorrecta.\nIntenta nuevamente')
                    }
                }

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