/*
    Crear un componente funcional llamado ResumenCurso que reciba
    como propiedades el nombre del curso, la duración en semanas y el
    nombre del instructor. El componente debe mostrar esta información con
    etiquetas HTML bien estructuradas y semánticas.
*/

export default function ResumenCurso(props){
    return <div>
        <h2> Resumen del Curso </h2>
        <h3>Nombre del Curso:</h3>
        <p><strong>{props.nombreCurso}</strong></p>
        <h4>Duracion en semanas: <strong>{props.duracionSemanas}</strong> semanas</h4>
        <h4> Instructor: <strong>{props.instructor}</strong></h4>
    </div>
}