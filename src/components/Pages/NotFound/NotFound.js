import React from 'react';
import error from '../../../images/logo/error-removebg-preview.png'

const NotFound = () => {
    return (
        <div className='mx-28 flex justify-center bg-slate-200 my-4 rounded-2xl'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;