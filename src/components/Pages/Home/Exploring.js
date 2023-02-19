import React from 'react';
import { Link } from 'react-router-dom';
import ExploreItems from './ExploreItems';
import './Exploring.css'

const Exploring = () => {
    return (
        <div className='mt-20 mb-12 pb-12 bg-slate-100'>
            <h3 className='pt-20 pb-12 text-5xl font-bold
            text-center'>Start Exploring</h3>
            <div className=' flex justify-evenly md:w-3/4 lg:w-2/4   mx-auto p-1 mx-3 bg-white rounded-l-full rounded-r-full shadow-xl font-semibold text-slate-700'>
                <Link to="/women" id='wmkbs'>Women</Link >
                <Link to="/men" id='wmkbs'>Man</Link >
                <Link to="/kids" id='wmkbs'>Kids</Link >
                <Link to="/beauty" id='wmkbs'>Beauty</Link >
                <Link to="/sports" id='wmkbs'>Sports</Link >
            </div>
            <ExploreItems></ExploreItems>
        </div>
    );
};

export default Exploring;