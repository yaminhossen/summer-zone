import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverItem = ({ item }) => {
    const { img, title, info, bgClass, bgClass1 } = item;
    return (
        <div className={`flex  p-8 rounded-xl ${bgClass}   hover:bg-amber-100`} >
            <div className={`w-3/6`}>
                <h3>{title}</h3>
                <h2 className='text-2xl font-bold'>{info}</h2>
                <Link to="/allItem" className='btn mt-12'>Show me all</Link>
            </div>
            <div className=' w-3/6 p-5'>
                <img className='h-40 lg:h-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default DiscoverItem;