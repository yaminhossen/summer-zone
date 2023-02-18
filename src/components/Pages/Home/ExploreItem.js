import React from 'react';
import './Exploring.css'
const ExploreItem = ({ item }) => {
    const { img, name, quality, quant } = item;
    return (
        <div className='bg-white rounded-3xl'>
            <div className='flex m-6 justify-between items-center mb-16'>
                <div className='w-20 h-28 p-4 bg-purple-100  rounded-full flex justify-center items-center'><img src={img} className='' alt="" /></div>
                <p>{quant} products</p>
            </div>
            <div className='flex justify-between items-center mx-6 mb-6'>
                <div>
                    <h2 className='font-semibold text-slate-400'>{quality}</h2>
                    <h2 className='text-3xl font-bold mb-12'>{name}</h2>
                    <p className=' bg-white text-slate-400 border-none hover:cursor-pointer hover:text-yellow-400 hover:font-bold  inline '>See Collection<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </p>
                </div>
                <div>
                    <div className='dot'></div>
                    <div className='dot1'></div>
                    <div className='dot2'></div>
                    <div className='dot3'></div>
                    <div className='dot4'></div>
                    <div className='dot5'></div>
                    <div className='dot6'></div>
                    <div className='dot7'></div>
                    <div className='dot8'></div>
                </div>
            </div>
        </div>
    );
};

export default ExploreItem;