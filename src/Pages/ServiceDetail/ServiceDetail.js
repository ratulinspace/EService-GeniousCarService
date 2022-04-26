import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div className='mt-5'>
            <h4 className='text-center'>Service ID: {serviceId}</h4>
            <div className="text-center">
                <Link to="/checkout">
                    <button className="btn btn-dark">Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;