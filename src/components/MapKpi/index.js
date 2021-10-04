import React from 'react'
import './mapkpi.css'


export default function MapKpi({children, name, value}){

    return(
       
       <div className="kpi-geolocate">
            <div className="ajuste-kpi">
            <div className="item-kpi">{name}</div>            
            <div className="valueItem-kpi">{value}</div>
            
            {children}     
                        
            </div>
        
        </div>
        
    )

}