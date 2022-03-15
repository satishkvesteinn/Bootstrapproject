import React from 'react';
import './about.css'

function About() {
    return (
        <>
            <div id='About' className='about'>
                <div className='container about-container'>
                    <h2 className='about-title'>ABOUT US</h2>
                    <p className='about-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
                    <div className='about-sub-container'>
                        <div className='about-sub-containers'>
                            <p className='about-sub-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='about-sub-paragraph'><i className="bi bi-check2-all"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <p className='about-sub-paragraph'><i className="bi bi-check2-all"></i>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            <p className='about-sub-paragraph'><i className="bi bi-check2-all"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                        <div className='about-sub-containers'>
                            <p className='about-sub-paragraph'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className='about-button'>
                                <a role="button" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;