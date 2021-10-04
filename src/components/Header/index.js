/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {useContext} from 'react'
import './header.css'
import {AuthContext} from '../../contexts/auth'
import avatar from '../../assets/avatar.png'

import {Link} from 'react-router-dom'

import { //FiUser,
         //FiSettings,
         FiPieChart,
         FiTrendingUp,
         FiMapPin,
         FiSliders,
         FiFileText,
         FiInfo,
         FiTrello } from "react-icons/fi";




export default function Header(){

   // const {user} = useContext(AuthContext)

   const {signOut} = useContext(AuthContext)

    return(
        <>
       <div className="sidebar">
       <button className="form-submit-button" onClick={()=> signOut()}>Sair</button>
           <div>
               <img src={avatar} alt="photo" />
           </div>

        <Link to="/dashboard">
        <FiTrello color="#fff" size={30} />
            Menu principal
        </Link>

        
        <Link to="/realtime">
        <FiTrendingUp color="#fff" size={30}/>
            Indicadores em tempo real
        </Link>

        <Link to="/iot">
        <FiSliders color="#fff" size={30} />
            Sensores e Atuadores IoT
        </Link>

        <Link to="/geolocate">
        <FiMapPin color="#fff" size={30} />
            Mapa dos produtores
        </Link>

        <Link to="/guides">
        <FiFileText color="#fff" size={30} />
            Guias sobre o Agro 4.0
        </Link>

        <Link to="/globalindicators">
        <FiPieChart color="#fff" size={24} />
            Indicadores nacionais
        </Link>

        <Link to="/about2">
        <FiInfo color="#fff" size={24} />
            Sobre o Projeto
        </Link>

    </div>
</>
    )

}