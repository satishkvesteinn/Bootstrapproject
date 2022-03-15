import React from 'react';
import '../pages/Services.css';

function Services(props) {
    return (
        <>
            <div className='service'>
                <p className="service-icon"><i className={props.serviceIcon}></i></p>
                <p className="service-title"><a href={props.url} target="_blank">{props.serviceTitle}</a></p>
                <p className="service-paragraph">{props.serviceParagraph}</p>
            </div>
        </>
    );
}

export default Services;