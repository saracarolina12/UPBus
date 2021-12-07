import React from "react"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { getUser } from "../../../Functions/index.js";
import { NewLocation } from "../../../Api/index.js";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import Flecha from '../../Pages/DarRide/Flecha.png';

function DarRide() {
  const [users, setUser] = useState();

  
  const onClickHandler = (id, location) => {
    //correos 
    var nombrec="", nombrep=id, correoc="", correop="", correofinal="", nombrefinal="";
    nombrec = localStorage.getItem("IDUsuario");
    correoc = nombrec+"@up.edu.mx";
    correop = nombrep+"@up.edu.mx";

    for (let i = 1; i<nombrec.length-1; i++) {
      nombrefinal += nombrec[i];
    }
    //console.log("prueba")

    correofinal = nombrefinal+"@up.edu.mx"
    console.log(correofinal)
    console.log(nombrefinal)
    
    // Correo para pasajero
    var templateParams = {
      NombreC: nombrefinal,
      NombreP: nombrep,
      CORREO: correop,
      Ubicacion: location
    };
    emailjs.send(
      'service_k5o001o',
      'template_s2pwy2a', 
      templateParams,
      'user_LqaHdDx3c72xQnYyLkmr3'
    ).then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Tu viaje ha sido confirmado.`,
          text: 'Revisa tu correo para más detalles.',
          timer: 2800,
          timerProgressBar: false
        })
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //Correo para conductor
    var templateParams = {
      NombreC: nombrefinal,
      NombreP: nombrep,
      CORREO: correofinal,
      Ubicacion: location
    };
    emailjs.send(
      'service_k5o001o',
      'template_s2pwy2a', 
      templateParams,
      'user_LqaHdDx3c72xQnYyLkmr3'
    ).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


    //limpiar ubicacion del pasajero
    location = "";
    NewLocation({ID:id, Location: location});

    //aumentar horas
  };

    useEffect(() => {
        const fetchData = async () => {
          const result = await getUser();
          setUser(result);
        };
        fetchData();
      }, [users]);

    return (
        <div>
        <div className="flecha">
           <Link to="/Bienvenido">
                <img src={Flecha} className="tamImg"></img>
            </Link>
            <br/>
            <br/>
            <br/>
        </div>
        <Container className="DarRide">
           <h3 className="titulo">Selecciona la ubicacion por la que puedes pasar</h3>
           <br/>
           {users &&
            users.map((user) => {
              if(user?.Location !== "")  {
              return(
                <div style={{ minWidth: '60%' }}>
                <Card key = {user.Location}> 
                  <Card.Header className="cardheader"><center><h5>{user?.ID ? user?.ID : "ID no disponible"}</h5></center></Card.Header>        
                  <Card.Body className="cardbody">
                  <Card.Text>{user?.Location ? user?.Location : "Ubicación no disponible"}</Card.Text>
                  <Button variant="primary" className="buttonbg" onClick={() => onClickHandler(user.ID, user.Location)}>Aceptar viaje</Button>
                  </Card.Body>
                </Card>
                <br/>
                </div>
            
              )
              }
            })}
            

        </Container>
        </div>
    )
}

export default DarRide;

//https://medium.com/@ethantcollins98/making-a-sometimes-fixed-navbar-157013dfc4a5