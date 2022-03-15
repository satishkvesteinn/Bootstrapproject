import React from 'react';
import './price.css'

function Price() {
    return (
        <>
            <div id='Pricing' className='price'>
                <div className='container price-container'>
                    <div>
                        <h1 className='price-title'>PRICING</h1>
                        <p className='price-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='plan'>
                        <div className='plan-container'>
                            <p className='plan-name'>FREE</p>
                            <p className='plan-price'><sup>$</sup><span>0</span>/ month</p>
                            <ul className='plan-unordered-list'>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <div className='buy-button'>
                                <a type='button' role='button' href='#'>Buy Now</a>
                            </div>
                        </div>

                        <div className='plan-container business'>
                            <p className='plan-name business-plan'>BUSINESS</p>
                            <p className='plan-price'><sup>$</sup><span>0</span>/ month</p>
                            <ul className='plan-unordered-list'>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <div className='buy-button'>
                                <a type='button' role='button' href='#'>Buy Now</a>
                            </div>
                        </div>

                        <div className='plan-container'>
                            <p className='plan-name'>DEVELOPER</p>
                            <p className='plan-price'><sup>$</sup><span>0</span>/ month</p>
                            <ul className='plan-unordered-list'>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <div className='buy-button'>
                                <a type='button' role='button' href='#'>Buy Now</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Price;