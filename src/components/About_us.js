import React from "react";
import "./About_us.css"

const About_us = () => {
    return (
        <>
            <div className="about_us">
                <div className="images">
                    <img src="./images/about_us.png" alt="" className="image_desktop" />
                    <img src="./images/Group_4.png" alt="" className="image_tab" />
                </div>
                <div className="text_about_us">
                    <div className="title_heading">About Us</div>
                    <div className="first_main_heading">We <span>believe</span></div>
                    <div className="second_main_heading">little things <span>matter</span></div>
                    <div className="sub_heading">Welcome to SR Fine , your number one source for your good health. We're dedicated  to  providing you the very best of your fitness, with an emphasis on extremely trained coaches, up   to the mark infrastructure, personal focus on each client.
                    </div>
                    <div className="sub_heading" id="margin">Founded in 2001 by Ajay Soni, SR Fitness has come a long way from its beginnings in Bhilwara, Rajasthan. When Ajay Soni first started out, his passion for fitness and health drove them to start their own business.
                    </div>
                    <div className="banchmark">
                        <div className="banchmark_div_1">
                            <li className="bold_bachmark">450+</li>
                            <li className="banchmark_heading">Happy Clients</li>
                        </div>
                        <div className="banchmark_div_2">
                            <li className="bold_bachmark">10+</li>
                            <li className="banchmark_heading">Coaches</li>
                        </div>
                        <div className="bachmark_div_3">
                            <li className="bold_bachmark">12+</li>
                            <li className="banchmark_heading">Years Of Excellence</li>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About_us;