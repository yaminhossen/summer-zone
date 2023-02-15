import React from 'react';
import tshirt from '../../../images/discover/yellow shirt.png'
import DiscoverItem from './DiscoverItem';

const items = [
    { id: 1, title: 'Explore new arrivals', info: 'Shop the latest from top brands', img: tshirt },
    { id: 2, title: 'Digital gift cards', info: 'Give the gift of choice', img: tshirt },
    { id: 3, title: 'Sale collection', info: 'Up to 80% off retail', img: tshirt },
]
const Discover = () => {

    return (
        <div className='ml-28 mt-32 mb-12'>
            <div>
                <h2 className='text-4xl font-bold'>Discover more. <span className='text-4xl font-bold text-gray-500'>Good things are waiting for you.</span></h2>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-16">{
                items.map(item => <DiscoverItem
                    key={item.id}
                    item={item}
                ></DiscoverItem>)
            }</div>

        </div>
    );
};

export default Discover;