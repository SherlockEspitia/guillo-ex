import {useState} from "react";

export default function ValidacionEmail(){
    const [email, setEmail] = useState('')
    const esValido = email.includes('@')

    return <>
        <h2>Validacion Email</h2>
        <input type="email" placeholder="example@mail.com" value={email} 
        onChange={(e)=>setEmail(e.target.value)}></input>
        {!esValido && email && <p >Correo invalido</p>}
    </>
}