/* eslint-disable jsx-a11y/alt-text */
//yarn start
import React from "react";
import {useState} from 'react'
import {Link} from 'react-router-dom'

//import { useContext } from "react";
//import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Kpi from "../../components/Kpi"
import StatusSistem from "../../components/StatusSistem";

import termometro from '../../assets/termometro.png'
import umid from '../../assets/umid.png'
import barometro from '../../assets/barometro.png'
import luminos from '../../assets/luminos.png'
import amon from '../../assets/amon.jpg'


import poutry from '../../assets/poutry.jpg'


import {TiMediaRecord, TiArrowUpThick,TiArrowDownThick } from 'react-icons/ti'


import "./dashboard.css";
//import "./App.css"

function Dashboard() {
  
  //const { signOut } = useContext(AuthContext);

  const temperature = 'NaN'
  const umidity = 'NaN'
  const press = 'NaN'
  const lux ='NaN'
  const amonia = 'NaN'
  
  const diaN = 9
  const name = 'User'
  const lote = "A2021M09"

  const [statusOn, setStatusOn] = useState('off-line')
  const [prod, setProd] = useState(1.23)
  const [etapaProdct, setetapaProdct] = useState('Alojamento')
  const [custUnit, setCustUnit] = useState (2.44)
  const [convAlim, setConvAlim] = useState (1.38)

  return (
    <div >
      <Header />
      
      <div className="content">
      
        <div className="hello">
        Olá,&nbsp;<div className="people">{name}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                                                      <div className="welcome1">Estamos no dia&nbsp;</div>
                                                      <div className="varDay">{diaN}</div><div className="welcome1">&nbsp;&nbsp;do lote&nbsp;</div>
                                                      <div className="varDay">{lote}</div>
          </div>

      <div className="alinhar">

      <StatusSistem name="Etapa da produção:"
            value={diaN > 15 ? <div 
           className="etapaProduct">Engorda</div> :
           <div className="etapaProduct">{etapaProdct}</div>}>
      </StatusSistem>

      <StatusSistem name="Conversão alimentar"
           value={custUnit < 6 ? <div 
            className="funcionando">
            {convAlim}&nbsp;<div className="difItem">
             <TiArrowDownThick size={20}/>-0.57(semana)</div></div> :
            <div className="Naofuncionando">{prod}</div>}>
      </StatusSistem>

      <StatusSistem name="Índice de mortalidade"
           value={prod < 5 ? <div 
           className="funcionando">{prod}<div className="difItem"> <TiArrowDownThick size={20}/>-0.3%(semana)</div></div> :
           <div className="Naofuncionando">{prod}</div>}>
      </StatusSistem>

      <StatusSistem name="Custo unitário por ave"
           value={custUnit < 6 ? <div 
            className="funcionando"><div className="difItem">R$&nbsp;</div>
            {custUnit}&nbsp;<div className="difItem">
             <TiArrowDownThick size={20}/>-0.57(semana)</div></div> :
            <div className="Naofuncionando">{prod}</div>}>
      </StatusSistem>

      <StatusSistem name="Dispositivos IoT"
           value={statusOn ? <div 
           className="Naofuncionando">OFF-LINE<TiMediaRecord size={40}/></div> :
           <div className="funcionando">'ON-LINE'</div>}>
        
      </StatusSistem>
        
      </div>
     
      <div className="alinhar"> 
      
      <Kpi name="Temperatura (ºC)" value={temperature}>
      <img className="poutry" src={termometro} />
      </Kpi>

      <Kpi name="Umidade (%)" value={umidity}>
      <img className="poutry" src={umid} />
      </Kpi>

      <Kpi name="Pressão (bar)" value={press}>
      <img className="poutry" src={barometro} />
      </Kpi>

      <Kpi name="Luminosidade (lux)" value={lux}>
      <img className="poutry" src={luminos} />
      </Kpi>

      <Kpi name="Amonia (ppm)" value={amonia}>
      <img className="poutry" src={amon} />
      </Kpi>

      </div>

      <div className="Acesso_Indcs">
      
      
      <span>
      Relatório de Lote 
       Gerar relatório
       <img className="poutry1" src={poutry} />
       
      </span>
   

       <Link to="/realtime">
       <button>
         Indicadores de produção
      </button>
      </Link>

      <Link to="/iot">
      <button>
        Monitoramento da granja em tempo real
      </button>
      </Link>

      </div>

      <div className="servicesText">
      Outros serviços:
      </div>

      <div className="ButtonsNavig">
      

      <Link to="/geolocate">
      <button>
        Mapa dos produtores
      </button>
      </Link>

      <Link to="/guides">
      <button>
        Guias do Agro 4.0
      </button>
      </Link>

      <Link to="/globalindicators">
      <button>
        Indicadores Nacionais
      </button>
      </Link>

      <Link to="/about2">
      <button>
        Sobre o Projeto
      </button>
      </Link>
      </div>

      </div>
      </div>
  );
}

export default Dashboard;
