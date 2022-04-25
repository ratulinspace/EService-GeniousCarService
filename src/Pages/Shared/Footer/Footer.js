import React from 'react';
import "./Footer.css";

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className="text-center mt-5">
            <p><small>A test project by @ratulinspace | {year}</small></p>
        </footer>
    );
};

export default Footer;