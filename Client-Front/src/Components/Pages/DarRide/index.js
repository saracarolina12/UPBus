import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { updateUser, getUser } from "../../../Functions/index.js";
import { updateConductor } from "../../../Api/index.js";
import { Link } from 'react-router-dom';

function DarRide() {
    const [users, setUser] = useState();

  /*onClickHandler(){
    //correo conductor
    //correo pasajero
    //aumentar horas
    updateConductor();
  };*/

    useEffect(() => {
        const fetchData = async () => {
          const result = await getUser();
          setUser(result);
        };
        fetchData();
      }, [users]);

    return (
        <Container className="DarRide">
           <br/>
           <Link to="/Bienvenido">
                <Button className="back">Regresar al menú</Button>
            </Link>
            <br/>
           <h3 className="titulo">Selecciona la ubicacion por la que puedes pasar</h3>
           {users &&
            users.map((user) => {
              if(user?.Location !== "")  {
              return(
                <div>
                <Card style={{ width: '100%' }}>
                <Card.Header className="cardheader"><center><h5>{user?.ID ? user?.ID : "ID no disponible"}</h5></center></Card.Header>        
                <Card.Body className="cardbody">
                <Card.Text>{user?.Location ? user?.Location : "Ubicación no disponible"}</Card.Text>
                <Button variant="primary" className="buttonbg">Aceptar viaje</Button>
                </Card.Body>
                </Card>
                <br/>
                </div>
              )
              }
            })}
        </Container>
    )
}

export default DarRide;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5