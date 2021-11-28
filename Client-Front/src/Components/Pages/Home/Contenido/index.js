import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Contenido.css';


function ContenidoHome() {
    return (      
        <div>
            {/* <div className="centrarHome">
            <Button className="colorBoton" href="/PedirViaje">Pedir viaje</Button>
            <Button className="colorBoton" href="/DarRide">Dar ride</Button>
            </div> */}
            <br/><br/>
            <center><h3 className="tituloprin">¿Por qué elegir UpBus?</h3></center>
            <br/><br/>
            <div className ="textoDiv">
            <Row>
                <Col>
                    <p className="tituloColumnas">¡Se eco-friendly!</p>
                    <p className="texto">
                        Este proyecto esta pensado para ayudar a reducir las emisiones de carbono de nuestra ciudad 
                        y ayudar a todo aquel alumno de la UP que necesite ride.
                        <br/> <br/>
                        Al participar, apoyas a salvar nuestro planeta usando menos coches.
                    </p>
                </Col>
                <Col>
                    <p className="tituloColumnas">Servicio social</p>
                    <p className="texto">
                        Lleva a otros alumnos a la uni y obtén horas para acabar tu servicio.
                        <br/> <br/>
                        Entre más viajes des, más horas de servicio social podrás obtener.
                    </p>   
                </Col>
                <Col>
                    <p className="tituloColumnas">¿Cómo comenzar?</p>
                    <p className="texto">
                        Regístrate con tu cuenta de la UP, inicia sesión, decide si quires ser conductor(dar
                        ride) o pasajero (pedir viaje) y ¡Listo! <br/> <br/>
                        Puedes encontrar más información en las páginas de Pedir viaje y Dar ride.
                    </p>   
                </Col> 
            </Row>
            </div>
      </div> 
    )
}

export default ContenidoHome