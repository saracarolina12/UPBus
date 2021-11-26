import '../Formulario.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { createUser } from '../../../Api/index.js';
import { useEffect, useState } from 'react';
import { getUser } from '../../../Functions';
import React from 'react';
import Swal from 'sweetalert2'

function Registrate() {
     const [id, setid] = useState();
     const [passw, setpassw] = useState();
     const [conf, setConf] = useState();
     const [state, setState] = useState();

    //OCchange
     const IDchange = (x) =>{  //cambios ID
        const {value} = x.target;
        console.log(value);
        setid(value);
     }
     const PasswChange = (x) =>{
         const {value} = x.target;
         console.log(value);
         setpassw(value);
     }
     const ConfChange = (x) =>{
        const {value} = x.target;
        console.log(value);
        setConf(value);
    }

    //Create
    const onSubmitHandler = async () => {
        if(passw && id && conf){
            if(!isNaN(id)){
                if(passw === conf){ //si las contraseñas coinciden, añadimos el
                    await createUser({ID: id, password: passw})
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        width: 650,
                        title: 'Tu usuario se ha creado correctamente',
                        showConfirmButton: false,
                        timer: 2500
                      })
                }
                else{
                    alert(`¡Las contraseñas no coinciden!\nIntenta de nuevo.`)
                }
            }else{
                alert(`Tu ID debe estar compuesto únicamente por números\nIntenta de nuevo.`)
            }
        }else{
            alert(`¡Campo vacío!\nIntenta de nuevo.`)
        }
    };

    useEffect(() => {
        // console.log("Todos");
        const fetchData = async() => {
            const result = await getUser();
            setState(result);                       //guardo el fetch
            console.log('Fetched data', result);
        };
        fetchData();
    }, [state]);
    return (
        <Container className="centrar">
            <br/>
            <h3 className="letraTitulo">Regístrate</h3>
            <br/>
           <Card
                bg='#881739'
                text='black'
                style={{ width: '60%'}}
                className="cardborder"
            >
                <Card.Header className="cardheader"><center><h4>¿Eres nuevo en la plataforma?</h4></center></Card.Header>
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
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Confirma tu contraseña
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control onChange={ConfChange} type="password" placeholder="Ingresa nuevamente tu contraseña" />
                            </Col>
                        </Form.Group>
                        <center>   
                            {/* <Nav.Link className="inactive" componentClass={Link} href="/Olvidemicontraseña" to="/Olvidemicontraseña">¿Olvidaste tu contraseña?</Nav.Link> */}
                            <Button onClick={onSubmitHandler} className="iniciarses">Registrar</Button>
                        </center>
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Registrate;
//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5