import React from "react";
import { Pricing_button } from "./Buttons";
import "./Pricing.css"

const Pricing = () => {
    return (
        <>
            <div className="Pricing">
                <div className="title_heading">Pricing</div>
                <div className="first_main_heading">find the</div>
                <div className="first_main_heading"><span>perfect plan</span> for <span>you</span></div>
                <div className="center_div_pricing">
                    {/* Pricing card start  */}

                    {/* card no. 1---- */}

                    <div className="Pricing_card">
                        <div className="duration">Monthly</div>
                        <div className="duration_amount">
                            <div className="amount">Rs 1,499</div>
                            <div className="per_duration">Per Month</div>
                        </div>
                        <div className="list_features">
                            <li id="features_1" className="features">Gym Access</li>
                            <li id="features_2" className="features">Yoga Classes</li>
                            <li id="features_3" className="features">Weekly Zumba Classes</li>
                            <li id="different" className="features">5% Supplements Discount</li>
                        </div>
                        <Pricing_button />
                    </div>

                    {/* card no. 2---- */}

                    <div className="Pricing_card" id="uniq">
                        <div className="duration" id="d_uniq">6 Months</div>
                        <div className="margin_pricing">
                        <div className="duration_amount">
                            <div className="amount">Rs 1,249</div>
                            <div className="per_duration">Per Month</div>
                        </div>
                        <div className="list_features">
                            <li id="features_1" className="features">Gym Access</li>
                            <li id="features_2" className="features">Yoga Classes</li>
                            <li id="features_3" className="features">Weekly Zumba Classes</li>
                            <li id="features_4" className="features">10% Supplements Discount</li>
                            <li id="features_4" className="features">Free Lockert</li>
                            <li id="features_4" className="features">Free Wifi</li>
                        </div>
                        <Pricing_button />
                        </div>
                    </div>

                    {/* card no. 3---- */}

                    <div className="Pricing_card">
                        <div className="duration">Monthly</div>
                        <div className="duration_amount">
                            <div className="amount">Rs 1,499</div>
                            <div className="per_duration">Per Month</div>
                        </div>
                        <div className="list_features">
                            <li id="features_1" className="features">Gym Access</li>
                            <li id="features_2" className="features">Yoga Classes</li>
                            <li id="features_3" className="features">Weekly Zumba Classes</li>
                            <li id="features_4" className="features">20% Supplements Discount</li>
                            <li id="features_" className="features">Free Wifi</li>
                            <li id="features_" className="features">Free Lockert</li>
                            <li id="features_4" className="features">Personal Trainer
                            </li>
                            <li id="features_4" className="features">Steam Sauna
                            </li>
                        </div>
                        <Pricing_button />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;


