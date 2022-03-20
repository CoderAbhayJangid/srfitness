import React from "react";
import { Our_coaches_card } from "./Card";
import "./Our_coaches.css"

const Our_coaches = () => {
    return (
        <>
            <div className="our_coaches">
                <div className="title_heading">Our Coaches</div>
                <div className="first_main_heading">meet with our</div>
                <div className="second_main_heading">extremely talented <span>Trainers</span></div>
                <div className="our_coaches_card_flex_div">
                    <Our_coaches_card
                        image_link="./images/Mask_group_1.png"
                        first_text="John Negler"
                        second_text="(Nutritionist)"
                    />
                    <Our_coaches_card
                        image_link="./images/Mask_group_3.png"
                        first_text="Karolin"
                        second_text="(Cardio Expert)"
                    />
                    <Our_coaches_card
                        image_link="./images/Mask_group_2.png"
                        first_text="Joseph Christ"
                        second_text="(Trainer)"
                    />
                </div>

            </div>
        </>
    );
}

export default Our_coaches;