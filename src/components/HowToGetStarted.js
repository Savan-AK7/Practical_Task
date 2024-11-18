import React from 'react';
import './HowToGetStarted.css';
import s1 from "../images/s1.JPG"
import s2 from "../images/s2.JPG"
import s3 from "../images/s3.JPG"
import started from "../images/started.JPEG"

const HowToGetStarted = () => {
    return (
        <div className="how-to-get-started">
            <div className="heading">
                <h2>How to get started</h2>
                <p>Follow these 3 easy steps!</p>
            </div>
            <div className="steps-container">
                <div className="step">
                    <img src={s1} alt="Step 1" />
                    <div className="step-content">
                        <h3>Choose favourite contest</h3>
                        <p>Register to LODE. & Choose your contest</p>
                    </div>
                </div>
                <div className="step">
                    <img src={s2} alt="Step 2" />
                    <div className="step-content">
                        <h3>Choose favourite contest</h3>
                        <p>Register to LODE. & Choose your contest</p>
                    </div>
                </div>
                <div className="step">
                    <img src={s3} alt="Step 3" />
                    <div className="step-content">
                        <h3>Take your victory</h3>
                        <p>Dream big, you are about to reach success.</p>
                    </div>
                </div>
                <img className="campaign-image" src={started} alt="Campaign" />
            </div>
        </div>
    );
};

export default HowToGetStarted;

