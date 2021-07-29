import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home/home'
import Maps from '../../pages/map'
import Explora from '../../pages/explora'
import Actividades from '../../pages/actividades'
import './Main.css';

const Main = () => {

    return (
        <div className='Main'>
            {/* <div className="wrapper"> */}
            <Switch>
                <Route path="/"
                    component={Home}
                    exact/>
                <Route path="/rutas"
                    component={Maps}/>
                <Route path="/explora"
                    component={Explora}/>
                <Route path="/actividades"
                    component={Actividades}/>
            </Switch>
            {/* </div> */} </div>
    )
}


export default Main;
