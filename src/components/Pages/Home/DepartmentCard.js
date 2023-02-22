import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentCard.css'

const DepartmentCard = ({ img, bgClass, title, quantity }) => {
    return (
        <div className='text-center'>
            <div>
                <div className='framee'>
                    <div className={` flex justify-center items-center rounded-3xl hover:bg-slate-300  h-80 lg:h-96 ${bgClass}`}>
                        <div className='p-2 imagee'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='butonn'>
                        <h3 className='showw '><Link to="/allItem" className='btn hover:bg-pink-500 
                       hover:font-bold 
                        hover:text-black  border-none'>Show All</Link></h3>
                        <h3 className='text-xl font-bold mt-4'>{title}</h3>
                        <h3 className='font-bold text-slate-500 mt-2'>{quantity}+ categories</h3>
                    </div>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default DepartmentCard;