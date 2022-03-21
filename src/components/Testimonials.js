import React from "react";
import { Testimonials_cards } from "./Card";
import "./Testimonials.css"

const Testimonials = () => {
    return(
        <>
            <div className="testimonials">
                <div className="text_center_testimonials">
                <div className="title_heading">Testimonials</div>
                <div className="first_main_heading">See what our</div>
                <div className="second_main_heading"><span>clients</span> are saying</div>
                </div>
                <div className="testimonials_cards">
                <Testimonials_cards
                    images_links = "./images/Path_6.png"
                    Testimonials_name = "Joseph Smith"
                    quote_down_name = "Amazing!"
                    quote_down_pera = "Very accommodating, exremly helpful and friendly staff. gym is clean and good quality equipments."
                    />
                    <Testimonials_cards
                    images_links = "./images/Path_7.png"
                    Testimonials_name = "Jenifer Lein"
                    quote_down_name = "Value For Money!"
                    quote_down_pera = "I joined while on holiday and from day 1 was made to feel welcome."
                    />
                    <Testimonials_cards
                    images_links = "./images/Path_8.png"
                    Testimonials_name = "Stan Smith"
                    quote_down_name = "Satisfied!"
                    quote_down_pera = "Very clean and a wide range of high spec equipments. Good classes, nice cafe."
                    />
                </div>
            </div>
        </>
    );
}
export default Testimonials;