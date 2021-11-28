import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { updateUser, getUser } from "../../../Functions/index.js";

function DarRide() {
    const [users, setUser] = useState();

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
           <h3 className="titulo">Selecciona la ubicacion por la que puedes pasar</h3>
           {users &&
            users.map((user) => (
           <Card style={{ width: '50%' }}>
           <Card.Header className="cardheader"><center><h5>{user?.ID ? user?.ID : "default"}</h5></center></Card.Header>        
            <Card.Body className="cardbody">
            <Card.Text>{user?.Location ? user?.Location : "default"}</Card.Text>
            <Button variant="primary" className="buttonbg">Aceptar viaje</Button>
            </Card.Body>
            </Card>
            ))}
        </Container>
    )
}

export default DarRide;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5