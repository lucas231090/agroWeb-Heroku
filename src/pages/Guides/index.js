import React from 'react'
import './guides.css'

import Header from '../../components/Header'

import Title from '../../components/Title'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function Guides(){
    return(
        <div>
            <Header />

            <div className="content">

            <Title name="Guias do Agronegócio 4.0">
                <Link to="/dashboard">
                    <FiArrowLeft size={45} />
                </Link>
            </Title>
            </div>
        </div>
    )
}