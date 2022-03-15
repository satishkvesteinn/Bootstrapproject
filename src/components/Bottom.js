import React from 'react';
import './bottom.css'

function Bottom() {
    return (<>
       <div className='bottom-footer'>
       <div className='container footer'>
            <div className='footer-title footer-list'>
                <h4>One Page</h4>
                <p>A108 Adam Street New York, NY 535022 United States</p>
                <p><b>Phone:</b> +1 5589 55488 55</p>
                <p><b>Email:</b> info@example.com</p>
            </div>
            <div className='footer-title footer-list'>
                <h6>Useful links</h6>
                <ul>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Home</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>About us</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Services</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Terms of service</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Privacy policy</a></li>
                </ul>
            </div>
            <div className='footer-title footer-list'>
                <h6>Useful links</h6>
                <ul>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Home</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>About us</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Services</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Terms of service</a></li>
                    <li><i class="bi bi-chevron-right"></i><a href='#'>Privacy policy</a></li>
                </ul>
            </div>
            <div className='footer-title'>
                <h6>Join Our Newsletter</h6>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div className='Subscribe'>
                    <input type="text"></input>
                    <input type="button" role='button' value="Subscribe"></input>
                </div>
            </div>
        </div>
        <div className='foot'>
            <div className='container main-footer'>
                <div className='copyright'>
                    <p>© Copyright <b className='developer-name'>OnePage</b>. All Rights Reserved</p>
                    <p>Designed by <b className='developer-name'>Satish kumar</b></p>
                </div>
                <div className='social-media'>
                    <ul>
                        <li><a><i className="bi bi-twitter"></i></a></li>
                        <li><a><i className="bi bi-facebook"></i></a></li>
                        <li><a><i className="bi bi-instagram"></i></a></li>
                        <li><a><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    </>);
}

export default Bottom;