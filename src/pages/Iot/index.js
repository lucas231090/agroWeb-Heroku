import React from 'react'
import Switch from "react-switch"
import {useState} from 'react'
import api from '../../services/api'

import './iotPage.css'
import Header from '../../components/Header'
import Title from '../../components/Title'
import IotCard from '../../components/IoT'
import SensorCard from '../../components/SensorCard'

import {FiArrowLeft} from 'react-icons/fi'

import {Link} from 'react-router-dom'

export default function Iot(){
   
    const [isEnable, setIsEnable] = useState(false)

    const isSwitch = () =>{
         setIsEnable(previousState => !previousState)
        
    }

    function socketSwitch(){

     const onSocket = {state: 'on'}
     const offSocket = {state: 'off'}
  
     const headers ={
          'Content-Type' : 'application/json',
          'user_id' : '615e71c6321b6631e0729b64'
     }

     if(isEnable === false){
          api.put('/actuator/618d139117ae0f00209c78c8', onSocket, {headers} )
          
     }else{
          api.put('/actuator/618d139117ae0f00209c78c8', offSocket, {headers})
          
     }
    }

    function processar(){
     isSwitch();
     socketSwitch();
 }

         
    return(
        
    <div>
     <Header />

        <div className="content">

            <Title name="Sensores e Atuadores IoT">
                <Link to="/dashboard">
                    <FiArrowLeft size={45} />
                </Link>
            </Title>

        <div className="servicesTextIoT">
        Sensores
        </div>

        <div className="alinharIoT"> 
              
        <SensorCard title="Temperatura geral">
        <div className="statusIA">Status: Manter</div>
        <div className="action">Ação: Manter</div>

        <div className="sensorNow">Agora:&nbsp; <div className="sensorValue">28ºC</div></div>
        <div className="recommended">Recomendação: 27 a 31ºC </div>

        </SensorCard>
       
       
        <SensorCard title="Umidade (%)">

        <div className="statusIA">Status: Manter</div>
        <div className="action">Ação: ventilar</div>

        <div className="sensorNow">Agora:&nbsp; <div className="sensorValue">89%</div></div>
        <div className="recommended">Recomendação: 65% a 90% </div>

        </SensorCard>

        </div>

        <div className="servicesTextIoT">
        Atuadores
        </div>
        
        
        <div className="alinharIoT">
       
        <IotCard title="Iluminação 1">
        
        <div className="switchbutton">
        <Switch
        onChange={processar}
        checked={isEnable}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        
        {isEnable ? <div className="statusAtuadoresON">LIGADO</div> :
         <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        
        
        </IotCard>

       
        </div>

    </div>

    </div>
    
    )
}