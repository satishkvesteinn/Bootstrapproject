import React from 'react';
import './contact.css'

function Contact() {
    return (
        <>
            <div id='Contact' className='contact'>
                <div className='container contact-container'>
                    <div>
                        <h1 className='contact-title'>CONTACT</h1>
                        <p className='contact-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930273.4070204408!2d82.47629743392866!3d24.38546030779801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef9c5a7931aa9%3A0x22e797ee960720a5!2sSonbhadra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1647295725338!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className='contact-detail-container'>
                        <div className='location-container'>
                            <div className='details'>
                                <i className="location bi bi-geo-alt"></i>
                                <div className='details-title'>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>

                            <div className='details'>
                                <i className="location bi bi-envelope"></i>
                                <div className='details-title'>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>

                            <div className='details'>
                                <i className="location bi bi-telephone"></i>
                                <div className='details-title'>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                        </div>

                        <form className='form-container'>
                            <div className='name-container'>
                                <input type="text" className='fname' name='fname' placeholder='First name'></input>
                                <input type="text" className='lname' name='lname' placeholder='Last name'></input>
                            </div>
                            <input type="text" className='subject' name="subject" placeholder='Subject'></input>
                            <textarea className='message' name='message' placeholder='Message'></textarea>
                            <div>
                                <button type="button" className='submit-button' role='submit' value="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;