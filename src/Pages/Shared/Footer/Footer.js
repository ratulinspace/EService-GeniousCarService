import React from 'react';
import "./Footer.css";

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer>
            <p><small>All rights reserved by @ratulinspace | {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;