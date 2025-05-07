/*
Diseñar un componente llamado EstadoConexion que reciba una
propiedad booleana llamada enLinea. Según el valor de esta prop, debe
mostrar un mensaje indicando si el usuario está "Conectado" o
"Desconectado", aplicando clases de color verde o rojo, respectivamente.
*/

export default function EstadoConexion(props){
    const styles = {
        conectado: {
            background: 'green',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold'
        },
        desconectado: {
            background:'red',
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold'
        }
    }
    return <div className={props.enlinea ? 'conectado':'desconectado'}>
        <p style={props.enlinea ? styles.conectado : styles.desconectado}>
            {props.enlinea ? 'Conectado': 'Desconectado'}
        </p>
    </div>
}