import React, { useState, useEffect } from 'react';
import Service from '../Home/Service/Service';
import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div id='services' className='container'>
            <h1 className='services-title mt-5 mb-5'>Our services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;