import React from 'react';
import './Services.css'
import Services from '../components/Services';

function Servicesdata() {

    const servicedata = [
        {
            id: 1,
            serviceIcon: "bi bi-stack",
            serviceTitle: "Lorem Ipsum",
            serviceParagraph: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            url: "bootstrap.com"
        },

        {
            id: 2,
            serviceIcon: "bi bi-palette",
            serviceTitle: "Sed ut perspiciatis",
            serviceParagraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
            url: "bootstrap.com"
        },

        {
            id: 3,
            serviceIcon: "bi bi-command",
            serviceTitle: "Magni Dolores",
            serviceParagraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            url: "bootstrap.com"
        },

        {
            id: 4,
            serviceIcon: "bi bi-fingerprint",
            serviceTitle: "Lorem Ipsum",
            serviceParagraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            url: "bootstrap.com"
        },
        {
            id: 5,
            serviceIcon: "bi bi-command",
            serviceTitle: "Magni Dolores",
            serviceParagraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            url: "bootstrap.com"
        },
        {
            id: 6,
            serviceIcon: "bi bi-command",
            serviceTitle: "Magni Dolores",
            serviceParagraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            url: "bootstrap.com"
        },
    ]

    return (
        <>
            <div id='Services' className='service-main-container'>
                <div className="container service-container">
                    <h1 className='service-title'>SERVICES</h1>
                    <p className='service-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    {
                        servicedata.map((item) => {
                            return (<Services
                                key={item.id}
                                serviceIcon={item.serviceIcon}
                                serviceTitle={item.serviceTitle}
                                serviceParagraph={item.serviceParagraph}
                                url={item.url}
                            />)
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Servicesdata;