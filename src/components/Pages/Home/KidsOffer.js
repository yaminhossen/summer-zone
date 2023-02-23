import React from 'react';
import { Link } from 'react-router-dom';
import kids from '../../../images/banner/kids1-removebg-preview.png'
import './Exploring.css'
const KidsOffer = () => {
    return (
        <div className='mx-12 lg:mx-28 my-32 bg-yellow-50 rounded-3xl flex items-center'>
            <div className='hidden lg:block w-2/5'>

                <div className='w-full '>
                    <div className="circle6 "></div>
                    <div className="circle7"></div>
                    <img className='w-full ml-20 kids' src={kids} alt="" />
                </div>
            </div>
            <div className='mx-8 lg:ml-32 lg:w-3/5'>
                <div className='mr-32'>
                    <div>

                        <div className='circle5 hidden lg:block'></div>
                        <h2 className='text-xl font-bold mb-12'>Summer Special</h2>
                        <div className='circle4'></div>
                    </div>
                    <h3 className='font-bold text-6xl'>Special offer in kids products</h3>
                    <h3 className='font-bold text-slate-500 my-8 '>Fashion is a farm of self-expression and autonomy at a particular period and place.Here have all the exclusive garments.</h3>
                    <div className='flex justify-between'>
                        <Link to="/allItem" className='btn'>Discover more</Link>
                        <div className='flex justify-between w-2/4'>
                            <div className="circle mt-6"></div>
                            <div className="circle2 mt-12"></div>
                            <div className="circle1 mt-12 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsOffer;