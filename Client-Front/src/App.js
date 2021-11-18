import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navbar';
import Foot from './Components/Footer';
import Home from './Components/Pages/Home';
import Rutas from './Components/Rutas';

function App() {
  return (
    <>
    <Navb />
    <Rutas />
    <Home />
    <Foot />
    </>
  );
}

export default App;
