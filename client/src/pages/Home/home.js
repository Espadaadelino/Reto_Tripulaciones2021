import React from 'react';
import Header from '../../components/Header/Header';
import Destacados from '../../components/Destacados/Destacados';
import './home.css'


function Home() {
    return (
        <div className="Home">
            <div>
                <h5>Descubre</h5>
                <h2>Barcelona</h2>
            </div>
            <Header/>
            <Destacados/>
        </div>
    )
}

export default Home
