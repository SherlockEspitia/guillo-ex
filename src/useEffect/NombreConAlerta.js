import { useEffect,useState } from "react";

export default function NombreConAlerta(){
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");


    useEffect(()=>{
        if(nombre){

            setMensaje(`¡Hola ${nombre}! Bienvenido`)
        }
    }, [nombre]);

    return <>
        <input type="text" placeholder="Escribe tu Nombre" value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        ></input>
        {mensaje && <p>{mensaje}</p>}
    </>
}