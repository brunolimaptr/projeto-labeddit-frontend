import React, {useEffect, useState} from "react";
import axios from "axios";
import { Main } from "./login.styled";
import { vaiParaLogin, vaiParaPost, vaiParaSignup } from "../coordinator/coordinator";
import { useNavigate } from "react-router-dom";

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
console.log(props.Login);

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
<Main>
    
    <p>Email</p><input onChange={onChangeEmail} type="text" value={email} placeholder={"E-mail"}></input>
    <p>Password</p><input onChange={onChangePassword} type="text" value={password} placeholder={"Senha"}></input>
    <button onClick={()=>postLogin()}><em>Continuar</em></button>
    <button onClick={()=>vaiParaSignup(navigate)}><em>Crie uma conta!</em></button>
</Main>
)

}