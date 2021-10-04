import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../SignUp/signup.css";

import {AuthContext} from '../../contexts/auth'


//import logo from '../../assets/Farmer.png'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const {signUp, loadingAuth} = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    
    if(name !== '' && email !== '' && password !== '' && password2 !== ''){
      signUp(name, email, password)
      
      alert("Aguarde...");

    }

  }

    return (
    <div className="container-center">
      <div className="phDmessage2">
        <h1 className="welcome">BEM VINDO AO FARM UFPR 4.0</h1>
        <h2 className="development">
          A APLICAÇÃO ESTÁ EM DESENVOLVIMENTO E PODE SOFRER ALTERAÇÕES E
          INSTABILIDADES
        </h2>
        <h3 className="qualif">
          Prezados professores, caso queiram, realizem seu próprio cadastro para
          acessar a plataforma
        </h3>
        <h4 className="qualif">
          Mas se quiserem visualizar a plataforma com os dados coletados na
          etapa de bancada utilizem as credenciais enviadas por e-mail
        </h4>
      </div>

      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail válido"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirme sua senha"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          
          <button className="create" type="submit">
          {loadingAuth ? 'Aguarde...' : 'Criar conta' }
          </button>
        </form>

        <div className="registration">
          <h0>Já tem uma conta?</h0> <Link to="/">Faça seu login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
