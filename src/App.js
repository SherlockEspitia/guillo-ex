//import logo from './logo.svg';
import './App.css';
/*
import Bienvenida from './components/Bienvenida';
import Saludo from './components/Saludo';
import TarjetaProducto from './components/TarjetaProducto';
import Contador from './useState/Contador';
import NombreUsuario from './useState/NombreUsuario';
import MostrarOcultar from './useState/MostrarOcultar';
import CambiarColor from './useState/CambiarColor';
*/
import ResumenCurso from './components/ResumenCurso';
import EstadoConexion from './components/EstadoConexion';
import ListaTareas from './components/ListaTareas';
import FichaAlumno from './components/FichaAlumno';
import NoticiaDestacada from './components/NoticiaDestacada';
import CambiarTema from './useState/CambiarTema';
import ContadorDeClics from './useState/ContadorDeClics';
import FormularioEdad from './useState/FormularioEdad';
import SeleccionarIdioma from './useState/SeleccionarIdioma';
import ContadorDeCaracteres from './useState/ContadorDeCaracteres';
import ContadorConTitulos from './useEffect/ContadorConTitulo';
import ContadorConMensaje from './useEffect/ContadorConMensaje';
import NombreConAlerta from './useEffect/NombreConAlerta';
import FormularNombreApellido from './formulariosContralados/formularioSimple';
import ValidacionEmail from './formulariosContralados/ValidacionEmail';

function App() {
  const name = 'Sherlock';
  return (
    <div className="App">
      <section>
        <h1>Hola {name} </h1>
        <ResumenCurso nombreCurso='Django' duracionSemanas='12' instructor='Lilliana Uribe'></ResumenCurso>        
        <EstadoConexion enLinea={false}></EstadoConexion>
        <ListaTareas tareas={[
          {descripcion:'Organizar el escritorio', completada:false},
          {descripcion:'Hacer la tarea', completada: true}
        ]}/>
        <FichaAlumno nombre="Andres Jaramillo" programaFormacion="ADSO" ficha="4242524" jornada="Diurna"/>
        <CambiarTema></CambiarTema>
      </section>
      <section>
        <NoticiaDestacada tituloNoticia="Habemus Papa" 
        contenidoNoticia="Fumata blanca, acuerdo y papa. Suenan las campanas de San Pedro. 
        Los 133 cardenales del cónclave más multicultural de la historia han elegido a un nuevo pontífice 
        en un cónclave más ágil de lo esperado, tras cuatro votaciones. 
        El candidato elegido ha conseguido reunir 89 votos, los dos tercios necesarios para salir elegido. 
        Su nombre se conocerá en breve con un ritual. 
        El protodiácono de la Iglesia católica es el encargado de anunciar quién será el próximo papa 
        con la tradicional fórmula en latín: “Annuntio vobis gaudium magnum: habemus Papam!” 
        (“¡Os anuncio una gran alegría: tenemos Papa!”). Después, pronunciar el nombre del nuevo Papa y el que ha elegido como pontífice. 
        Los dos últimos cónclaves se resolvieron en tiempos similares. 
        En 2005 bastaron 24 horas y cuatro votaciones para la elección de Benedicto XVI."
        fechaPublicacion="08 de marzo de 2025"></NoticiaDestacada>
        <ContadorDeClics></ContadorDeClics>
        <FormularioEdad></FormularioEdad>
        <SeleccionarIdioma></SeleccionarIdioma>
        <ContadorDeCaracteres></ContadorDeCaracteres>
      </section>
      <section>
        <ContadorConTitulos></ContadorConTitulos>
        <ContadorConMensaje></ContadorConMensaje>
        <NombreConAlerta></NombreConAlerta>
        <FormularNombreApellido></FormularNombreApellido>
        <ValidacionEmail></ValidacionEmail>
      </section>
    </div>
  );
}

/*<Saludo/>
<Bienvenida nombre="Pequeño Kratos" />
<TarjetaProducto nombre='Dvd' precio="2000" descripcion="Las mejores cumbias de System of a Down"></TarjetaProducto>  
<Contador></Contador>
<NombreUsuario></NombreUsuario>
<MostrarOcultar></MostrarOcultar>
<CambiarColor></CambiarColor>*/

export default App;
