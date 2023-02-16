import React from 'react';
import ExploreItems from './ExploreItems';
import './Exploring.css'

const Exploring = () => {
    return (
        <div className='mt-20 mb-12 pb-12 bg-slate-100'>
            <h3 className='pt-20 pb-12 text-5xl font-bold
            text-center'>Start Exploring</h3>
            <div className=' flex justify-evenly w-2/4   mx-auto p-1 bg-white rounded-l-full rounded-r-full shadow-xl font-semibold text-slate-700'>
                <p id='wmkbs'>Women</p>
                <p id='wmkbs'>Man</p>
                <p id='wmkbs'>Kids</p>
                <p id='wmkbs'>Beauty</p>
                <p id='wmkbs'>Sports</p>
            </div>
            <ExploreItems></ExploreItems>
        </div>
    );
};

export default Exploring;