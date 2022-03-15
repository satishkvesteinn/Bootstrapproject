import React from 'react';
import './about.css'
import Testimonials from './Testimonials';
import './testimonials.css'
function TestimonialsData() {

    const quoters = [
        {
            id: 1,
            quoterImgUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-1.jpg",
            quoterName: "Sara Wilsson",
            post: "Designer",
            quote: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },

        {
            id: 2,
            quoterImgUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-2.jpg",
            quoterName: "Sara Wilsson",
            post: "Designer",
            quote: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },

        {
            id: 3,
            quoterImgUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-3.jpg",
            quoterName: "Sara Wilsson",
            post: "Designer",
            quote: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },

        {
            id: 4,
            quoterImgUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-4.jpg",
            quoterName: "Sara Wilsson",
            post: "Designer",
            quote: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },

        {
            id: 5,
            quoterImgUrl: "https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-5.jpg",
            quoterName: "Sara Wilsson",
            post: "Designer",
            quote: " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        }
    ]

    console.log(quoters);

    return (
        <>
            <div className='testimonials'>
                <div className='container testimonials-container'>
                    <h2 className='testimonials-title'>TESTIMONIALS</h2>
                    <p className='testimonials-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   <div className='quote-rapper'>
                   {
                        quoters.map((item) => {
                            return (<Testimonials key={item.id}
                                quoterImgUrl={item.quoterImgUrl}
                                quoterName={item.quoterName}
                                post={item.post}
                                quote={item.quote}
                            />)
                        })}
                   </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsData;