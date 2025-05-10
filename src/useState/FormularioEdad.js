/*
Implementar un componente FormularioEdad que contenga un campo
numérico para ingresar la edad del usuario, y que muestre un mensaje que
indique si la persona es mayor o menor de edad en tiempo real.
*/

import { useState } from "react";

export default function FormularioEdad(){
    const [edad, setEdad ] = useState(0);
    const [mensaje, setMensaje] = useState('');

    function calcularEdad(event){
        let edad = event.target.value;
        setEdad(edad);
        edad >= 18 ? setMensaje('Eres mayor de edad'): setMensaje('Eres menor de edad');
    }

    return(
        <>
            <form>
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" value={edad} onChange={calcularEdad} placeholder="Ingresa tu edad"></input>
            </form>
            <p>{mensaje}</p>
        </>
    )
}