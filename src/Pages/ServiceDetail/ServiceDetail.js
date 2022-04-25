import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <h4 className='text-center'>Service ID: {serviceId}</h4>
        </div>
    );
};

export default ServiceDetail;