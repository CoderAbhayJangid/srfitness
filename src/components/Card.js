import React from "react";

import "./Card.css";


const Our_coaches_card = (data) => {
    return (
        <>
            <div className="Our_coaches_card">
                <img src={data.image_link} alt="" className="image" />
                <div className="center_text_our_coaches">
                    <div className="first_text">{data.first_text}</div>
                    <div className="second_text">{data.second_text}</div>
                </div>
            </div>
        </>
    );
}

const Testimonials_cards = (data) => {
    return (
        <>
            <div className="Testimonials_card">
                <img src={data.images_links} alt="" className="test_image" />
                <div className="first_text" id="test_name">{data.Testimonials_name}</div>
                <img src="./images/quote.png" alt="" className="quote" />
                <div className="first_text" id="test_down_name">{data.quote_down_name}</div>
                <div className="sub_heading" id="down_pera">{data.quote_down_pera}</div>
            </div>
        </>
    );
}

export { Our_coaches_card, Testimonials_cards};
