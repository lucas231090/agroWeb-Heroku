import React from 'react'
import './iot.css'


export default function IotCard({children, title, grandeza}){

    return(
       
       <div className="iotcard">        
        <div className="itemIoT">{title}</div>
        
        {children}   
        
        </div>
        
    )

}