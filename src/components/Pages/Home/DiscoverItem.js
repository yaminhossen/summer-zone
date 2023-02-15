import React from 'react';

const DiscoverItem = ({ item }) => {
    const { img, title, info } = item;
    return (
        <div className='flex bg-orange-100 p-8 rounded-xl '>
            <div className='w-3/6'>
                <h3>{title}</h3>
                <h2 className='text-2xl font-bold'>{info}</h2>
                <button className='btn mt-12'>Show me all</button>
            </div>
            <div className=' w-3/6'>
                <img className='h-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default DiscoverItem;