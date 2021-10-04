import React from "react";
import { Switch } from "react-router-dom";
import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from "../pages/SignUp";
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"
import Geolocate from '../pages/Geolocate'
import GlobalIndicators from '../pages/GlobalIndicators'
import Guides from '../pages/Guides'
import Iot from '../pages/Iot'
import RealTime from '../pages/RealTime'
import About2 from '../pages/About2'


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/geolocate" component={Geolocate} isPrivate />
            <Route exact path="/globalindicators" component={GlobalIndicators} isPrivate />
            <Route exact path="/guides" component={Guides} isPrivate />
            <Route exact path="/iot" component={Iot} isPrivate />
            <Route exact path="/realtime" component={RealTime} isPrivate />
            <Route exact path="/about2" component={About2} isPrivate />

        </Switch>
    )
}

