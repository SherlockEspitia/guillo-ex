/*
Construir un componente ContadorDeCaracteres que muestre un área
de texto y, debajo, el número total de caracteres escritos. Además, debe
mostrar un mensaje de advertencia si se superan los 100 caracteres.
*/

import { useState } from "react";

export default function ContadorDeCaracteres(){
    const maximoCaracteres = 100;
    const [texto, setTexto] = useState("");
    let mensajeAdvertencia = texto.length > maximoCaracteres ? `Superaste la cantidad maxima de ${maximoCaracteres}`: '';
    return (
        <>
            <form>
                <textarea onChange={(event)=>{
                    setTexto(event.target.value)
                }}></textarea>
                <p> {texto.length} / {maximoCaracteres} caracteres </p>
            </form>
            <p>{mensajeAdvertencia}</p> 
        </>
    )

}