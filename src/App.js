//import logo from './logo.svg';
import './App.css';
import Bienvenida from './components/Bienvenida';
import Saludo from './components/Saludo';
import TarjetaProducto from './components/TarjetaProducto';
import Contador from './useState/Contador';
import NombreUsuario from './useState/NombreUsuario';
import MostrarOcultar from './useState/MostrarOcultar';
import CambiarColor from './useState/CambiarColor';
import ResumenCurso from './components/ResumenCurso';
import EstadoConexion from './components/EstadoConexion';

function App() {
  const name = 'Sherlock';
  return (
    <div className="App">
        <h1>Hola {name} </h1>
        <ResumenCurso nombreCurso='Django' duracionSemanas='12' instructor='Lilliana Uribe'></ResumenCurso>
        <Saludo/>
        <Bienvenida nombre="Pequeño Kratos" />

        <TarjetaProducto nombre='Dvd' precio="2000" descripcion="Las mejores cumbias de System of a Down"></TarjetaProducto>  
        <Contador></Contador>
        <NombreUsuario></NombreUsuario>
        <MostrarOcultar></MostrarOcultar>
        <CambiarColor></CambiarColor>
        <EstadoConexion enLinea={false}></EstadoConexion>
    </div>
  );
}

export default App;
