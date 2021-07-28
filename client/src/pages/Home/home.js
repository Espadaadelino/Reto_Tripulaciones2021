import React from 'react';
import Header from '../../components/Header/Header';
import Destacados from '../../components/Destacados/Destacados';
import './home.css'


function home() {
    return (
        <div>
            <div>

                <h5>Descrubre</h5>
                <h2>Barcelona</h2>

            </div>
            <Header/>
            <Destacados/>


        </div>
    )
}

export default home
