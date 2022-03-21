import React from "react";
import "./Redbox.css"

const Redbox = () => {
    return (
        <>
            <div className="redbox">
                <img src="./images/redbox.png" alt="" className="redbox_image"/>
                <div className="redbox_text_button">
                    <p className="first_main_heading" id="color_redbox">
                        Start your
                    </p>
                    <p className="first_main_heading" id="color_redbox">
                        training today
                    </p>

                </div>
            </div>
        </>
    );
}

export default Redbox;