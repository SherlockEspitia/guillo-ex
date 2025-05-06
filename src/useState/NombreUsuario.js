import React,{ useState } from "react";

export default function NombreUsuario(){
    const [nombre, setNombre] = useState('')
    return <div>
        <input type="text" placeholder="Escribe tu nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        <p>Hola, {nombre}!</p>        
    </div>
}