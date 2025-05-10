/* 
Diseñar un componente ContadorDeClics que registre cuántas veces se
ha hecho clic en un botón y muestre un mensaje diferente cuando el
número de clics sea múltiplo de 5.
*/
import { useState } from "react";

export default function ContadorDeClics(){
    const [contador, setContador]= useState(0);
    const [mensaje, setMensaje]= useState('');

    function incrementarContador(){
        setContador(contador + 1);
        if((contador +1)%5 === 0){
            setMensaje('Hola si que vas rapido!')
        }else{
            setMensaje('La paciencia es una virtud')
        }
    }
    return(
        <>
            <p>Has hecho click {contador} veces</p>
            <button onClick={incrementarContador}>Haz Click</button>
            <p>{mensaje}</p>
        </>
    )
}