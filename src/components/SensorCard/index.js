import React from 'react'
import './sensorcard.css'


export default function SensorCard({children, title, status, sensor, recommended}){

    return(
       
       <div className="sensorcard">        
       <div className="sensoritem">{title}</div>
       <div className="statusIA">{status}</div>
       <div className="sensorNow">{sensor}</div>
       <div className="recommended">{recommended}</div>
        
        {children}   
        
        </div>
        
    )

}