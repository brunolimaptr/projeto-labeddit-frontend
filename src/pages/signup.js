import React, {useEffect, useState} from "react";
import axios from "axios";
import { vaiParaLogin, vaiParaSignup } from "../coordinator/coordinator";
import { useNavigate } from "react-router-dom";

export function Signup(props){

    const navigate = useNavigate()

    const [nick, setNick] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])


    const onChangeNick = (e) => {
        setNick(e.target.value);
       }

    const onChangeEmail = (e) => {
       setEmail(e.target.value);
      }
  
      const onChangePassword = (e) => {
        setPassword(e.target.value);
      }


    const bodySignup = {
        "nick_name": nick,
        "email": email,
        "password": password
    }

const postSignup = async () => {
    try {
        const response = await axios.post(`https://labeddit-0qmm.onrender.com/users/signup`, bodySignup)

        console.log(response);
        props.setSignup(response.data.token)
        window.localStorage.setItem("tokenSignup", response.data.token)
        response.data.token ? vaiParaLogin(navigate) : vaiParaSignup(navigate)

    } catch (error) {
        console.log(error);
    }
}


return (
    <>
        <p>Apelido</p><input onChange={onChangeNick} type="text" value={nick} placeholder={"Apelido"}></input>
        <p>Email</p><input onChange={onChangeEmail} type="text" value={email} placeholder={"E-mail"}></input>
        <p>Password</p><input onChange={onChangePassword} type="text" value={password} placeholder={"Senha"}></input>
        <button onClick={()=>postSignup()}><em>Cadastrar</em></button>
    </>
    )
}