import React from 'react';
import './Callaction.css'

function Callactions() {
    return (
        <>
            <div className='callaction'>
                <div className='container callaction-container'>
                    <h1 className='callaction-title'>Call To Action</h1>
                    <p className='callaction-paragraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='callaction-button'>
                        <a id='hi' href="#">Call to Action</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Callactions;