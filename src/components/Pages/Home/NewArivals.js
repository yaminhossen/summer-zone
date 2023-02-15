import React from 'react';
import arrival1 from '../../../images/discover/yellow shirt.png'
import ArivalItem from './ArivalItem';
const arrialItems = [
    { id: 1, name: 'Leather Gloves', info: 'Perfect mint green', price: 42, img: arrival1 },
    { id: 2, name: 'Leather Gloves', info: 'Perfect mint green', price: 42, img: arrival1 },
    { id: 3, name: 'Leather Gloves', info: 'Perfect mint green', price: 42, img: arrival1 },
    { id: 4, name: 'Leather Gloves', info: 'Perfect mint green', price: 42, img: arrival1 },
]
const NewArivals = () => {
    return (
        <div className='mx-28 mb-12'>
            <h2 className='text-4xl font-bold'>New Arrivals. <span className='text-4xl font-bold text-gray-500'>REY backpacks & bags</span></h2>
            <div className='mt-16 grid grid-cols-4 gap-6'>
                {
                    arrialItems.map(arrive => <ArivalItem
                        key={arrive.id}
                        arrive={arrive}
                    ></ArivalItem>)
                }
            </div>
        </div>
    );
};

export default NewArivals;