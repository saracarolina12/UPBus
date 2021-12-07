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
import { createUser, SearchUser, LastIDs, updatePassword, NewLocation} from '../../../Api/index.js';
import { useEffect, useState } from 'react';
import { getUser } from '../../../Functions';
import React from 'react';
import Swal from 'sweetalert2';


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

     function ValidatePassword(Uno, Dos) {
         var spaces=false, contNums=0, contSpaces=0, err="", OK=true, RESULTOFVALIDATING=[true, null]; //RESULTOFVALIDATING[true/false , error]
         while(!spaces && (contSpaces < Uno.length)){
            if(Uno.charAt(contSpaces) == " ") spaces = true;
            contSpaces++;
         }
         for(let i=0; i<Dos.length; i++){
            if(!isNaN(Dos[i])) contNums++; //para ver que exista al menos un número
         }
         if(Uno.length<8 || Dos.length<8){
           err += "\n*Tu contraseña debe contener al menos 8 caracteres."
           RESULTOFVALIDATING[0] = false; RESULTOFVALIDATING[1] = err;
         }
         if(contNums === 0){
            err += "\n*Tu contraseña debe contener al menos un número."
            RESULTOFVALIDATING[0] = false; RESULTOFVALIDATING[1] = err;
         } 
         if(spaces){
            err += "\n*La contraseña no puede contener espacios en blanco."
            RESULTOFVALIDATING[0] = false; RESULTOFVALIDATING[1] = err;
         }
        return RESULTOFVALIDATING; //si es válida la contraseña, regresa [true, null] /// si NO es válida, regresa [false, el error]
     }
    const onSubmitHandler = async (x) => {
        if(Uno && Dos){
            let validated = ValidatePassword(Uno, Dos);
            if(validated[0] === false) alert(`Errores:${validated[1]}`)
            else{
                if(Uno == Dos){
                    var ID = JSON.parse(localStorage.getItem('ID'));
                    NewLocation({ID: ID, password: Uno}) //le cambia la contraseña al usuario
                    let timerInterval
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha restablecido tu contraseña correctamente.',
                        timer: 2000,
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
            }      
        }else{
            alert('Campo Vacío.\nIntenta nuevamente.')
        }
    }

    useEffect(() => {
        const fetchData = async() => {
        const result = await getUser();
        setUsers(result)
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
