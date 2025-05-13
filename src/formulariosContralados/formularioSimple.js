import {useState} from "react";

export default function FormularNombreApellido(){
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');

    return <>
        <h2>Ingresa tus Datos</h2>
        <input placeholder="Nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
        <input type="text" placeholder="Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        <p>Hola, {nombre} {apellido}</p>
    </>
}