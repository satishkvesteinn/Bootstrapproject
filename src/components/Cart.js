import React from 'react';
import './cart.css';

function Cart(props) {
    return (
        <>
            <div className='cart'>
                <p className="cart-icon"><i className={props.cartIcon}></i></p>
                <p className="cart-title"><a href={props.url} target="_blank">{props.cartTitle}</a></p>
                <p className="cart-paragraph">{props.cartParagraph}</p>
            </div>
        </>
    );
}

export default Cart;