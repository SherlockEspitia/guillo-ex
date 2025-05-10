/* 
Crear un componente llamado CambiarTema que permita alternar entre
un modo claro y un modo oscuro al presionar un botón. El color de fondo y
el texto deben cambiar dinámicamente según el tema activo.
*/
import { useState } from "react";

export default function CambiarTema(){
    const [tema, setTema] = useState('claro');
    const root = document.documentElement;
    const cambiarTema = ()=>{
        tema === 'claro' ? setTema('oscuro'): setTema('claro')
    }
    if(tema === 'claro'){
        root.style.setProperty('color-scheme', 'light');
    }else{
        root.style.setProperty('color-scheme', 'dark');
    }

    return(
        <button onClick={cambiarTema}>{tema}</button>
    )
}