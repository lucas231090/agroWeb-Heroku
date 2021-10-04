import React from 'react'
import './geolocate.css'
import { useState } from 'react'

import Header from '../../components/Header'
import Map from '../../components/Map'
import StatusSistem from '../../components/StatusSistem'
import MapKpi from '../../components/MapKpi'

import Title from '../../components/Title'
import {FiArrowLeft, FiAlertCircle} from 'react-icons/fi'
import {Link} from 'react-router-dom'


export default function Geolocate(){

    const [prod, setProd] = useState(1.23)
    const [custUnit, setCustUnit] = useState (2.44)
    const [convAlim, setConvAlim] = useState (1.38)

    return(

        <div>
            <Header />

            <div className="content">

            <Title name="Mapa dos produtores">
                <Link to="/dashboard">
                    <FiArrowLeft size={45} />
                </Link>
            </Title>
           
           <div className='container-view-map'>
            <Map />
            
            <div className="container-kpi-map">
               Desempenho Regional
            
            <div className="container-region-kpi">
            <FiAlertCircle size={25}/> Nessa aba, podemos verificar nosso desempenho com outros produtores regionais.
             Compartilhando dados, ajudamos uns aos outros a identificar as debilidades e
             tomar decisões acertivas, agindo diretamente no problema identificado!
            </div>

            <div className='mine-region-kpi'>
            
                Comparativo 
            
                <div className="zip-kpi">
                       
               
                <div className='mine-region-comparation-kpi'>
                MINHA GRANJA 
                </div>
                
                <div className='mine-region-comparation-kpi'>
            
                OUTROS 
        
                </div>
                </div>  
            </div> 

            <div className="kpi-globals-name">Índice de conversão alimentar</div> 

            <div className="zip-kpi-container">
                     
            <MapKpi value={custUnit > convAlim ? <div 
            className="funcionando">
            {convAlim}</div> :
            <div className="Naofuncionando">{prod}</div>} />
            
            <MapKpi value={custUnit < convAlim ? <div 
            className="funcionando">
            {convAlim}</div> :
            <div className="Naofuncionando">{prod}</div>} />

            </div>

            <div className="kpi-globals-name">Índice de mortalidade</div>
            <div className="zip-kpi-container">
                     
            <MapKpi value={custUnit > convAlim ? <div 
            className="funcionando">
            0.95</div> :
            <div className="Naofuncionando">1.11</div>} />
            
            <MapKpi value={custUnit < convAlim ? <div 
            className="funcionando">
            0.95</div> :
            <div className="Naofuncionando">1.11</div>}/>

            </div>

            <div className="kpi-globals-name">Custo unitário por ave</div>
            <div className="zip-kpi-container">
                     
            <MapKpi value={custUnit < convAlim ? <div 
            className="funcionando">
            2.99</div> :
            <div className="Naofuncionando">3.45</div>} />
            
            <MapKpi value={custUnit > convAlim ? <div 
            className="funcionando">
            2.99</div> :
            <div className="Naofuncionando">3.45</div>} />

            </div>
               <div className="aviso">
                Quando os valores estão em verde, seu desempenho é melhor do que a média dos outros produtores
                </div>
            </div>
            </div>
            </div>
        </div>


    )
}