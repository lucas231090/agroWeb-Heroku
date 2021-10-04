import React from 'react'
import './kpi.css'


export default function Kpi({children, name, value}){

    return(
       
       <div className="kpi">
            {children}     
            
            <div className="ajuste">
            <div className="item">{name}</div>            
            <div className="valueItem">{value}</div>
            </div>
        
        </div>
        
    )

}