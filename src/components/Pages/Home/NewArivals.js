import React from 'react';
import explore2 from '../../../images/explore/Explore (2).png'
import ArivalItem from './ArivalItem';
const arrialItems = [
    { id: 1, name: 'Leather Gloves', info: 'Perfect mint green', price: 42, img: explore2, bgClass: 'bg-yellow-100' },
    { id: 2, name: 'Boys Tshirt', info: 'Perfect mint green', price: 52, img: explore2, bgClass: 'bg-red-100' },
    { id: 3, name: 'Owesome Polo Shirt', info: 'Perfect mint green', price: 72, img: explore2, bgClass: 'bg-orange-100' },
    { id: 4, name: 'Boys Comfort Shorts', info: 'Perfect mint green', price: 92, img: explore2, bgClass: 'bg-blue-100' },

]
const NewArivals = () => {
    return (
        <div className='mx-12 lg:mx-28 mb-12'>
            <h2 className='text-4xl font-bold'>New Arrivals. <span className='text-4xl font-bold text-gray-500'>REY backpacks & bags</span></h2>
            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
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