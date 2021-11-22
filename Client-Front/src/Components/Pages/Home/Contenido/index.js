import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Contenido.css';
import Carousel from 'react-bootstrap/Carousel'


const Time = 2500;
function ContenidoHome() {
    return (      
        <div>
            <div className="centrarHome">
            <Button className="colorBoton">Pedir viaje</Button>
            <Button className="colorBoton">Dar ride</Button>
            </div>

            <div className ="textoDiv">
            <Row>
                <Col>
                    <p className="tituloColumnas">¡Se eco-friendly!</p>
                    <p className="texto">
                        Este proyecto esta pensado para ayudar a reducir las emisiones de carbono de nuestra ciudad 
                        y ayudar a todo aquel alumno de la UP que necesite ride.
                        <br/> <br/>
                        Al participar, apoyas a salvar nuestro planeta
                    </p>
                </Col>
                <Col>
                    <p className="tituloColumnas">Recibe horas de servicio social</p>
                    <p className="texto">
                        Al seleccionar ser conductor, habrá un contador de horas que te ayuda a completar
                        tu servicio social.
                        <br/> <br/>
                        Entre más viajes des, más horas de servicio social podrás obtener
                    </p>   
                </Col>
                <Col>
                    <p className="tituloColumnas">¿Cómo comenzar?</p>
                    <p className="texto">
                        Regístrate con tu cuenta de la UP, inicia sesión, decide si quires ser conductor(dar
                        ride) o pasajero (pedir viaje) y ¡Listo! <br/> <br/>
                        Puedes encontrar más información en las páginas de Pedir viaje y Dar ride
                    </p>   
                </Col> 
            </Row>
            </div>
      </div> 
    )
}

export default ContenidoHome
