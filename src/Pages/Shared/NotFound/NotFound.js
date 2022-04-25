import React from 'react';
import notFound from "../../../images/404-error.png";

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;