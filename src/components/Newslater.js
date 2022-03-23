import React from "react";
import "./Newslater.css"

const Newslater = () => {
    return (
        <>
            <div className="Newslater">
                <div className="title_heading">Newslater</div>
                <div className="first_main_heading"><span>Join our</span></div>
                <div className="first_main_heading">eat well, be well culture.</div>
                <div className="sub_heading" id="sub_heading_email">Stay Up-To-Date With Our New Openings, Upcoming Events, Seasonal Offers, And Promotions.</div>
                <div className="email_button">
                    <input type="email" name="" id="email_input" className="input_fil" placeholder="Enter your email address"/>
                    <button className="Subscribe">Subscribe <img src="./images/send.png" alt="" className="button_image" /></button>
                </div>
                
            </div>
        </>
    );
}

export default Newslater;