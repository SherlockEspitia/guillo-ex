/*
Desarrollar un componente SeleccionarIdioma con un conjunto de
botones para cambiar el idioma de un mensaje mostrado en pantalla (por
ejemplo: Español, Inglés y Francés). El mensaje debe cambiar
automáticamente según el idioma seleccionado.
*/
import { useState } from "react";

const idiomas = [
    {"nombre":"Español", "abreviatura":"Es-es","mensaje":"Bienvenido al curso de React"},
    {"nombre":"English", "abreviatura":"En-en","mensaje":"Welcome to the React course"},
    {"nombre":"Francois", "abreviatura":"Fr-fr","mensaje":"Bienvenue dans le cours de React"}
]
export default function SeleccionarIdioma(){
    const [idioma, setIdioma] = useState(idiomas[0]);
    return(
        <form>
            <select onChange={((event)=>{                
                setIdioma(idiomas.find((lang)=>lang.abreviatura === event.target.value))
            })}>
                {idiomas.map((idioma, index)=>{
                    return(
                        <option key={index} value={idioma.abreviatura}>{idioma.nombre}</option>
                    )
                })}
            </select>
            <p>{idioma.mensaje}</p>
        </form>
    )

}