import React from 'react'
import './statussistem.css'


export default function StatusSistem({children, name, value}){

    return(
       
       <div className="statusSistem">
            {children}     
            
            <div className="ajusteStatus">
            <div className="itemStatus">{name}</div>            
            <div className="valueItemStatus">{value}</div>
            </div>
        
        </div>
        
    )

}