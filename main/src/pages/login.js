import React, {useEffect, useState} from "react";
import axios from "axios";
import { CardGeral, Main, MainLogin } from "./login.styled";
import { vaiParaLogin, vaiParaPost, vaiParaSignup } from "../coordinator/coordinator";
import { useNavigate } from "react-router-dom";
import logoLabeddit from "../assets/img/logoLabeddit.png"
import barra from "../assets/img/barra.png"
import barraInferior from "../assets/img/barraInferior.png"

export function Login(props) {

    const navigate = useNavigate()

    

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const bodyLogin = {
        "email": email,
        "password": password
    }

    const onChangeEmail = (e) => {
       setEmail(e.target.value);
      }
  
      const onChangePassword = (e) => {
        setPassword(e.target.value);
      }

const postLogin = async () => {

    try {
        const response = await axios.post(`https://labeddit-0qmm.onrender.com/users/login`, bodyLogin)

        console.log(response.data);
        props.setLogin(response.data.token)
        window.localStorage.setItem("tokenLogin", response.data.token)
        response.data.token ? vaiParaPost(navigate) : vaiParaLogin(navigate)

    } catch (error) {
        console.log(error);
    }
}


return (
<MainLogin>
    <img src={logoLabeddit}/>
    <p className="TituloLabeddit"><b>{"LabEddit"}</b></p>
    <p className="SubTitulo">{"O projeto de rede social da Labenu"}</p>
    <input className="InputEmail" onChange={onChangeEmail} type="text" value={email} placeholder={"E-mail"}></input>
    <input className="InputSenha" onChange={onChangePassword} type="text" value={password} placeholder={"Senha"}></input>
    <button className="BotaoContinuar" onClick={()=>postLogin()}><p>{"Continuar!"}</p></button>
    <img className="Barra" src={barra}/>
    <button className="BotaoCrieConta" onClick={()=>vaiParaSignup(navigate)}><div>{"Crie uma conta!"}</div></button>
    <img className="BarraInferior" src={barraInferior}/>
</MainLogin>
)

}