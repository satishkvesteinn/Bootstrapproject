import React from 'react';
import './clients.css'

function Client() {
    return ( 
        <>
           <div className='Client-section'>
           <div className='container client-container'>
                <div className='clientsdata'>
                    <h1>64</h1>
                    <p>Happy Clients</p>
                </div>

                <div className='clientsdata'>
                    <h1>85</h1>
                    <p>Projects</p>
                </div>

                <div className='clientsdata'>
                    <h1>30</h1>
                    <p>Years of experience</p>
                </div>

                <div className='clientsdata'>
                    <h1>20</h1>
                    <p>Awards</p>
                </div>
            </div>
           </div>
        </>
     );
}

export default Client;