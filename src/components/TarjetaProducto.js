function TarjetaProducto(props) {

    return <div style={{border:'1px solid #ccc', padding:'10px', margin:'10px'}}>
        <h4>{props.nombre}</h4>
        <p>Precio: ${props.precio}</p>
        <p>Descripción: {props.descripcion}</p>
    </div>
}

export default TarjetaProducto;