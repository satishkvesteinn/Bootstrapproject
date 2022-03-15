import React from 'react';
import './about.css'
import './testimonials.css'
function Testimonials(props) {
    console.log(props)
    return (
        <>
            <div className='quote'>
                <div className='quote-container'>
                    <p><i className="quote-open bi bi-quote"></i>
                        <i> {props.quote} </i>
                        <i className="quote-close bi bi-quote"></i></p>
                </div>
                <div className='quoter'>
                    <img src={props.quoterImgUrl}></img>
                    <h5>{props.quoterName}</h5>
                    <p>{props.post}</p>
                </div>
            </div>
        </>
    );
}

export default Testimonials;