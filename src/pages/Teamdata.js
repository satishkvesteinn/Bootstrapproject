import React from 'react';
import './team.css'
import Team from './Team';

function Teamdata() {

    const teamprofiledata = [
        {
            id: 1,
            imageUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-1.jpg",
            profileName: "Walter White",
            post: "Chief Executive Officer",
            instagramLink: "",
            facebookLink: "",
            linkedinLink: "",
            twitterLink: ""
        },

        {
            id: 2,
            imageUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-2.jpg",
            profileName: "Sarah Jhonson",
            post: "Product Manager",
            instagramLink: "",
            facebookLink: "",
            linkedinLink: "",
            twitterLink: ""
        },

        {
            id: 3,
            imageUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-3.jpg",
            profileName: "William Anderson",
            post: "CTO",
            instagramLink: "",
            facebookLink: "",
            linkedinLink: "",
            twitterLink: ""
        },

        {
            id: 4,
            imageUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-4.jpg",
            profileName: "Amanda Jepson",
            post: "Accountant",
            instagramLink: "",
            facebookLink: "",
            linkedinLink: "",
            twitterLink: ""
        }

    ]


    return (
        <>
            <div  id='Team' className='team'>
                <div className='container team-container'>
                    <div>
                        <h1 className='team-title'>TEAM</h1>
                        <p className='team-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='team-profile-container'>
                        {
                            teamprofiledata.map((item) => {
                                return (<Team 
                                    key = {item.id}
                                    imageUrl={item.imageUrl}
                                    post = {item.post}
                                    profileName = {item.profileName}
                                    linkedinLink = {item.linkedinLink}
                                    facebookLink = {item.facebookLink}
                                    instagramLink = {item.instagramLink}
                                    twitterLink = {item.twitterLink}
                                />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Teamdata;