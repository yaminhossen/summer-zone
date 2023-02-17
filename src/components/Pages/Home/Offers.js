import React from 'react';
import './Exploring.css'
import man from '../../../images/banner/man.png'
const Offers = () => {
    return (
        <div className='mx-28 rounded-3xl bg-pink-50 flex my-32'>
            <div className='w-2/4 flex items-center'>
                <div className='ml-28'>
                    <div className='circleA'></div>
                    <h3 className='text-5xl font-bold'>Don't miss out on special offers</h3>
                    <h2 className='font-bold mt-6 mb-7 text-slate-500'>Register to receive news about the latest, savings combos, discount codes...</h2>
                    <ul className='font-bold 
                    '>
                        <li>1. Savings combos</li>
                        <li>2. Freeship</li>
                        <li>3. Premium magazines</li>
                    </ul>
                    <div className="form-control">
                        <div className="input-group mt-12">
                            <input type="text" placeholder="Enter your email" className="input input-bordered" />
                            <button className="btn ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className='circleB'></div>
                    <div className='circleC'></div>
                </div>
            </div>
            <div className='w-2/4'>
                <div className="circleE"></div>
                <img className='w-4/5 man' src={man} alt="" />
                <div className="circleD"></div>
            </div>
        </div>
    );
};

export default Offers;