/* 
Implementar un componente FichaAlumno que reciba los datos de un
estudiante (nombre, programa de formación, ficha y jornada) por medio de
props y los presente en una tabla.
*/
export default function FichaAlumno(props){

    return (
        <>
            <h2> Ficha de Alumno </h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Programa de formacion</th>
                        <th>ficha</th>
                        <th>Jornada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nombre}</td>
                        <td>{props.programaFormacion}</td>
                        <td>{props.ficha}</td>
                        <td>{props.jornada}</td>
                    </tr>
                </tbody>
            </table>
        </>
   ) 

}