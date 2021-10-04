//yarn start
import React from 'react'
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import "../SignIn/signin.css"

import {AuthContext} from '../../contexts/auth'
//import logo from '../../assets/Farmer.png'

function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, loadingAuth} = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()

    if (email !== '' && password!== ''){
      signIn(email, password)
    }
    
  }


  return (
    <div className="container-center"> 

      <div className="phDmessage">
        <h1 className="welcome">BEM VINDO AO FARM UFPR 4.0</h1>
        <h2 className="development">A APLICAÇÃO ESTÁ EM DESENVOLVIMENTO E PODE SOFRER ALTERAÇÕES E INSTABILIDADES*</h2>
        <h3 className="qualif">Obrigado pela disponibilidade em acessar a plataforma web e enviar um feedback!</h3>
        <h4 className="qualif">Prezados professores, utilizem as credenciais enviadas por e-mail!</h4>
      </div>

      <div className="login">
          <form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar' }</button>
        </form>

       <div className="registration">
       <h0 >Não tem uma conta?</h0> <Link to="/register">Cadastre-se</Link>
       </div>

       <div className="about">
       <h0 >Sobre o projeto</h0> <Link to="/about">Clique aqui</Link>
       </div>


        </div>
    </div>
  );
}

export default SignIn;
