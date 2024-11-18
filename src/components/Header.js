import React from 'react';
import './Header.css';
import logo from "../images/logo.jpg"
import user from "../images/user.JPEG"
import coin from "../images/coin.jpg"
import H2 from "../images/header 2.JPG" 

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="profile">
                <div className="coin">
                    <img src={coin} alt="Coin" />
                    <span>1500</span>
                </div>
                <div className="currency">
                    <img src={H2} alt="Currency" />
                    <span>₹ 1500</span>
                </div>
                <div className="user-greeting">
                    <span>👋 Hello!</span>
                    <span>User Name</span>
                </div>
                <div className="user-icon">
                    <img src={user} alt="User" />
                </div>
            </div>
        </div>
    );
};

export default Header;

