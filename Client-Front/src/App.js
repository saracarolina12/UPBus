import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navbar';
import Foot from './Components/Footer';
import Rutas from './Components/Rutas/index.js';

function App() {
  return (
    <>
    {/* <Navb /> */}
    <div className="Foot1">
    <div className="Foot2">

    <Rutas />
    </div>

    <Foot />
    </div>
    </>
  );
}

export default App;
