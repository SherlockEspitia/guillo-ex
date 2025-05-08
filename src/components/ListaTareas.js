/*

Construir un componente ListaTareas que reciba como props un
conjunto de tareas en forma de lista de objetos, y renderice cada una con
su nombre y estado (completada o pendiente). Debe usar .map() para
recorrer y mostrar cada tarea.

*/

export default function ListaTareas(props) {
    return (
        <div>
            <h2>Lista de Tareas</h2>
            {props.tareas.map((tarea, index)=>{
                return <p key={index}>{tarea.descripcion} - <span>{tarea.completada?'✅':'❎'}</span></p>
            })}
        </div>
    )
}