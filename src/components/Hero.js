import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="title">Giveaway Battle</h1>
                <p className="subtitle">
                    Complete the activity get all of unique prize in our Giveaway Battle
                </p>
                <div className="button-container">
                    <div className="button">
                        <span>To Complete</span>
                    </div>
                    <span className="dont-miss">Don't miss</span>
                    <div className="countdown">
                        <div className="time-unit">
                            <span className="time">30</span>
                            <span className="label">Days</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time">12</span>
                            <span className="label">Hours</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time">00</span>
                            <span className="label">Minutes</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-unit">
                            <span className="time">00</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

