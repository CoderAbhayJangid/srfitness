import React from "react";
import "./Buttons.css";

const Border_button = () => {
    return(
        <>
            <div>
                <button className="border_button">Join Now</button>
            </div>
        </>
    );
}

const Pricing_button = () => {
    return(
        <>
            <div>
                <button className="Pricing_button">Book</button>
            </div>
        </>
    );
}

export {Border_button, Pricing_button};