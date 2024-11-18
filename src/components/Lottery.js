import React from 'react';
import './Lottery.css';
import L1 from "../images/L1.JPG"
import L2 from "../images/L2.JPG"
import L3 from "../images/L3.JPG"
import L4 from "../images/L4.JPG"
import L5 from "../images/L5.JPG"

const Lottery = () => {
    return (
        <div className="lottery">
            <div className="heading">
                <h2>Try your luck LOTTERY</h2>
                <p>Follows Activities to win the prize</p>
            </div>
            <div className="activities-container">
                <div className="activity">
                    <div className="activity-content">
                        <h3>Reedeem for Prize</h3>
                        <p>Min. 10 offer redeem</p>
                        <div className="button green">To Complete</div>
                    </div>
                    <img src={L1} alt="Prize" />
                </div>
                <div className="activity">
                    <div className="activity-content">
                        <h3>Follow Instagram</h3>
                        <p>Follow askgrabit page & share</p>
                        <div className="button gray">Complete</div>
                    </div>
                    <img src={L2} alt="Instagram" />
                </div>
                <div className="activity">
                    <div className="activity-content">
                        <h3>Invite Friends</h3>
                        <p>Invite a new user to download Grabit user</p>
                        <div className="button green">To Complete</div>
                    </div>
                    <img src={L3} alt="Invite" />
                </div>
                <div className="activity">
                    <div className="activity-content">
                        <h3>Add Google Review</h3>
                        <p>Add play store 1 review</p>
                        <div className="button green">To Complete</div>
                    </div>
                    <img src={L4} alt="Google Review" />
                </div>
                <div className="activity">
                    <div className="activity-content">
                        <h3>Pay</h3>
                        <p>Pay 99/- excited gift win</p>
                        <div className="button green">To Complete</div>
                    </div>
                    <img src={L5} alt="Pay" />
                </div>
            </div>
        </div>
    );
};

export default Lottery;

