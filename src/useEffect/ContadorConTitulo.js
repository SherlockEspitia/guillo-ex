import { useState,useEffect } from "react";

export default function ContadorConTitulos(){
    const [contador, setContador] = useState(0)
    useEffect(()=>{
        document.title = `Contador: ${contador}`
    }, [contador]);

    return <>
        <h2> Contador : {contador}</h2>
        <button onClick={()=>setContador(contador+1)}>Aumentar</button>   
    </>
}