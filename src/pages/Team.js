import React from 'react';
import './team.css'

function Team(props) {

    return (
        <>

            <div className='team-profile'>
                <div className='team-member-image'>
                    <div>
                        <img src={props.imageUrl}></img>
                    </div>
                    <div className='member-social-media'>
                        <ul>
                            <li><a href={props.twitterLink}><i class="bi bi-twitter"></i></a></li>
                            <li><a href={props.facebookLink}><i class="bi bi-facebook"></i></a></li>
                            <li><a href={props.instagramLink}><i class="bi bi-instagram"></i></a></li>
                            <li><a href={props.linkedinLink}><i class="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='team-member-details'>
                    <h5>{props.profileName}</h5>
                    <p>{props.post}</p>
                </div>
            </div>

        </>
    );
}

export default Team;