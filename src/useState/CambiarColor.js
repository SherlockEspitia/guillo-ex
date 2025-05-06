import React, {useState} from 'react'

export default function CambiarColor(){
    const [color, setColor] = useState('white')
    return <div style={{width: '100px', height: '100px', backgroundColor: color}}>
        <button onClick={()=>setColor('red')}>Rojo</button>
        <button onClick={()=>setColor('green')}>Verde</button>
        <button onClick={()=>setColor('blue')}>Azul</button>
    </div>
}