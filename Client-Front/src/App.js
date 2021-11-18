import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navbar';
import Foot from './Components/Footer';
import Rutas from './Components/Rutas/index.js';

function App() {
  return (
    <>
    <Navb />
    <Rutas />
    <Foot />
    </>
  );
}

export default App;
