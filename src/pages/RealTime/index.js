import React from 'react'
import './realtime.css'

import Header from '../../components/Header'

import Title from '../../components/Title'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function RealTime(){

    return(
        <div>
            <Header />

            <div className="content">

            <Title name="Indicadores em tempo real">
                <Link to="/dashboard">
                    <FiArrowLeft size={45} />
                </Link>
            </Title>
            </div>
        </div>
    )
}