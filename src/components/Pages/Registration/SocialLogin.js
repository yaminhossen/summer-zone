import React from 'react';

const SocialLogin = () => {
    return (
        <div >
            <button className='btn my-4 w-full bg-gray-400 border-none text-gray-600 font-bold hover:bg-gray-500 hover:text-white'>Login by Google</button>
            <br />
            <button className='bg-gray-400 border-none w-full btn mb-4  text-gray-600 font-bold hover:bg-gray-500 hover:text-white'>Login by Facebook</button>
        </div>
    );
};

export default SocialLogin;