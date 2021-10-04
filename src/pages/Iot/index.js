import React from 'react'
import Switch from "react-switch"
import {useState} from 'react'

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

    const [isEnable2, setIsEnable2] = useState(false)

    const isSwitch2 = () =>{
         setIsEnable2(previousState => !previousState)
    }

    const [isEnable3, setIsEnable3] = useState(false)

    const isSwitch3 = () =>{
         setIsEnable3(previousState => !previousState)
    }

    const [isEnable4, setIsEnable4] = useState(false)

    const isSwitch4 = () =>{
         setIsEnable4(previousState => !previousState)
    }

    const [isEnable5, setIsEnable5] = useState(false)

    const isSwitch5 = () =>{
         setIsEnable5(previousState => !previousState)
    }

    const [isEnable6, setIsEnable6] = useState(false)

    const isSwitch6 = () =>{
         setIsEnable6(previousState => !previousState)
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
        onChange={isSwitch}
        checked={isEnable}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        
        {isEnable ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        
        
        </IotCard>

        <IotCard title="Ventilação 1">
        <div className="switchbutton">
        <Switch
        onChange={isSwitch2}
        checked={isEnable2}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        
        {isEnable2 ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
              
        </IotCard>

        <IotCard title="Aquecimento 1">
        <div className="switchbutton">
        <Switch
        onChange={isSwitch3}
        checked={isEnable3}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        {isEnable3 ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        </IotCard>

        </div>

        <div className="alinharIoT">
        <IotCard title="Iluminação 2">
        <div className="switchbutton">
        <Switch
        onChange={isSwitch4}
        checked={isEnable4}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        {isEnable4 ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        </IotCard>

        <IotCard title="Ventilação 2">
        <div className="switchbutton">
        <Switch
        onChange={isSwitch5}
        checked={isEnable5}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        {isEnable5 ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        </IotCard>

        <IotCard title="Aquecimento 2">
        <div className="switchbutton">
        <Switch
        onChange={isSwitch6}
        checked={isEnable6}
        offColor={'#c00212'}
        height={40}
        width={80}
        /> 
        </div>
        {isEnable6 ? <div className="statusAtuadoresON">LIGADO</div> : <div className="statusAtuadoresOFF"> DESLIGADO </div>}
        </IotCard>
        </div>

        </div>

    </div>
    
    )
}