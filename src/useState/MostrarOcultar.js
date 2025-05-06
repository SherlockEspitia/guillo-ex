import React, {useState} from "react"

export default function MostrarOcultar() {
    const [mostrar, setMostrar] = useState(false)
    return <div>
        <button onClick={()=>setMostrar(!mostrar)}>
            {mostrar?'Ocultar mensaje':'Mostrar mensaje'}
        </button>
        {mostrar && <p>¡Hola! Este es un mensaje oculto</p>}
    </div>    
}