import { useState, useEffect } from "react";

export default function ContadorConMensaje(){
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    useEffect(()=>{
        document.title = `Contador: ${contador}`;

        setMensaje( `El contador cambio a ${contador}`);

        const timer = setTimeout(()=>{
            setMensaje('');
        }, 5000);
        return ()=>clearTimeout(timer)
    }, [contador]);

    return <>
        <h2>Contador: {contador}</h2>
        <button onClick={()=>{setContador(contador+1)}}>Incrementar</button>
        {mensaje && <p>{mensaje}</p>}
    </>
}