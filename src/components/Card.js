import React from "react";
import "./Card.css"

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

export { Our_coaches_card };
