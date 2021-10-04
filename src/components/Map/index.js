import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../../components/Marker'
import './map.css'

const Map = () =>{

    const API_KEY = 'AIzaSyAogpk32LK_2iJe7UOEe-PQ91ngKwq12jQ'

    return(

        <div className="container-map">

            <GoogleMapReact
            bootstrapURLKeys={{key: API_KEY}}
            center={{
                lat: -25.4449276,
                lng: -49.238382
            }}
            defaultZoom={15}
            >

            <Marker lat={-25.4449276} lng={-49.238382}/> 

            <Marker lat={-25.4709229} lng={-49.2447545}/>

            <Marker lat={-25.4505878} lng={-49.2311614}/>

            </GoogleMapReact>


        </div>

    )
}

export default Map