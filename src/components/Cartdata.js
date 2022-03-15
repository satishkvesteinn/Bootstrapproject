import React from 'react';
import './cart.css';
import Cart from './Cart';

function Cartdata() {

    const cartdata = [
        {
            id:1,
            cartIcon: "bi bi-stack",
            cartTitle: "Lorem Ipsum",
            cartParagraph: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            url:"bootstrap.com"
        },

        {
            id:2,
            cartIcon: "bi bi-palette",
            cartTitle: "Sed ut perspiciatis",
            cartParagraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
            url:"bootstrap.com"
        },

        {
            id:3,
            cartIcon: "bi bi-command",
            cartTitle: "Magni Dolores",
            cartParagraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            url:"bootstrap.com"
        },

        {
            id:4,
            cartIcon: "bi bi-fingerprint",
            cartTitle: "Lorem Ipsum",
            cartParagraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            url:"bootstrap.com"
        }
    ]

    return (
        <>
            <div className="container cart-container">
                {
                    cartdata.map((item) => {
                        return(<Cart 
                            key={item.id}
                            cartIcon={item.cartIcon}
                            cartTitle={item.cartTitle}
                                cartParagraph={item.cartParagraph}
                                url={item.url}
                            />)
                    })
                }
            </div>
        </>
    );
}

export default Cartdata;