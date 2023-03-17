import React, { useEffect, useState } from "react";
import axios from "axios";
import { vaiParaLogin, vaiParaSignup } from "../coordinator/coordinator";
import { useNavigate } from "react-router-dom";
import { MainSignup } from "./signup.styled";
import barraInferior from "../assets/img/barraInferior.png"
import logoPequena from "../assets/img/logoPequeno.png"

export function Signup(props) {

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
        <MainSignup>

            <p className="header"><img className="LogoPequena" src={logoPequena}/></p>

            <h1>{"Olá, boas vindas ao"}</h1>
            <h1>{"LabEddit ;)"}</h1>
            <input className="InputApelido" onChange={onChangeNick} type="text" value={nick} placeholder={"Apelido"}></input>
            <input className="InputEmail" onChange={onChangeEmail} type="text" value={email} placeholder={"E-mail"}></input>
            <input className="InputSenha" onChange={onChangePassword} type="text" value={password} placeholder={"Senha"}></input>
            <p className="TextoMeio">{"Ao continuar, você concorda com o nosso Contrato de"}</p>
            <p className="TextoMeio2">{"usuário e nossa Política de Privacidade"}</p>
            <input type="checkbox" id="horns" name="horns"/><p className="TextoMeio3">{"Eu concordo em receber emails sobre coisas legais"}</p>
            <p className="TextoMeio4">{"no Labeddit"}</p>
            <button className="BotaoCadastrar" onClick={() => postSignup()}><em>Cadastrar</em></button>
            <img className="BarraInferior" src={barraInferior}/>
        </MainSignup>
    )
}