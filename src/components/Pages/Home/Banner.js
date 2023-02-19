import React from 'react';
import banner from '../../../images/banner/sbanner2_prev_ui.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-green-100  lg:flex'>
            <div className='lg:ml-28 mx-12 pt-20 pb-20'>
                <div className='bg-pink-400 w-12 h-12 rounded-full hidden lg:block ml-96 mb-10
                '></div>
                <h2 className='text-2xl'>In this season find the best</h2>
                <h2 className='text-7xl font-bold mt-4'>Exclusive collection for everyone</h2>
                <button className='btn mt-14 px-8  rounded-l-full rounded-r-full '>Explore now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
                <div className='bg-red-400 w-6 h-6 rounded-full mt-2
                '></div>
                <div className='bg-green-500 w-12 h-12 rounded-full mt-6 ml-64
                '></div>
            </div>
            <div className='mx-12 hidden lg:block'>
                <div className='bg-purple-400 w-7 h-7 rounded-full mt-6 ml-60
                '></div>
                <img className='banner' src={banner} alt="" />
                <div className='pink bg-pink-400 w-10 h-10 rounded-full mt-6 ml-24
                '></div>

                <div className='orange bg-orange-400 w-8 h-8 rounded-full hidden lg:block mt-6 
                '></div>
            </div>
        </div>
    );
};

export default Banner;