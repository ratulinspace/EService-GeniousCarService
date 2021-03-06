import React from 'react';
import "./Footer.css";

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className="text-center mt-5">
            <p><small>A test project by <button className='border rounded py-0 px-2 mx-1'>ratulinspace</button> | {year}</small></p>
        </footer>
    );
};

export default Footer;