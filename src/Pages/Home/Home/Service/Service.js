import React from 'react';
import { Button } from 'react-bootstrap';
import "./Service.css";

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div className='service'>
            <img className="w-100" src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: {price}</h6>
            <p><small>{description}</small></p>
            <Button className="p-1 px-3" variant="dark"><small>Book {name}</small></Button>{' '}
            {/* <button>Book {name}</button> */}
        </div>
    );
};

export default Service;