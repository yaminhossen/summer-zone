import React from 'react';
import tshirt from '../../../images/discover/yellow shirt.png'
import discover1 from '../../../images/discover/discover (1).png'
import discover2 from '../../../images/discover/discover (2).png'
import DiscoverItem from './DiscoverItem';

const items = [
    { id: 1, title: 'Explore new arrivals', info: 'Shop the latest from top brands', img: discover1, bgClass: 'bg-pink-100' },
    { id: 2, title: 'Digital gift cards', info: 'Give the gift of choice', img: discover2, bgClass: 'bg-red-100' },
    { id: 3, title: 'Sale collection', info: 'Up to 80% off retail', img: tshirt, bgClass: 'bg-yellow-100' },
]
const Discover = () => {

    return (
        <div className='mx-12 lg:mx-28 mt-32 mb-12'>
            <div>
                <h2 className='text-4xl font-bold'>Discover more. <span className='text-4xl font-bold text-gray-500'>Good things are waiting for you.</span></h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">{
                items.map(item => <DiscoverItem
                    key={item.id}
                    item={item}
                ></DiscoverItem>)
            }</div>

        </div>
    );
};

export default Discover;