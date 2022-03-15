import React from 'react';
import Cartdata from '../components/Cartdata';
import './home.css'

function Home() {
    return (
        <>
        <div className='homemaincontainer'>
            <div className='container home-container'>
                <div className='home-title'>
                    <h1>One Page Bootstrap Website Template</h1>
                    <p>We are team of talented designers</p>
                    <span>
                    <a href="#">Get Started</a>
                    </span>
                </div>
            </div>
                <Cartdata/>
        </div>
        </>
    );
}

export default Home;