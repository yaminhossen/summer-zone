import React from 'react';
import explore2 from '../../../images/explore/Explore (2).png'
import ArivalItem from './ArivalItem';
import arival1 from '../../../images/explore/arrival (1).png'
import arival2 from '../../../images/explore/arrrval2.png'
import arival3 from '../../../images/explore/arrival3.png'
const arrialItems = [
    { id: 1, name: 'Black T-Shirt', info: 'Comfort matte black', price: 42, img: explore2, bgClass: 'bg-yellow-100' },
    { id: 2, name: 'Black & Red Casual Belt', info: 'Black and Red combo package', price: 52, img: arival1, bgClass: 'bg-red-100' },
    { id: 3, name: 'Black Smart Watch', info: 'Perfect matching black', price: 72, img: arival2, bgClass: 'bg-purple-100' },
    { id: 4, name: 'Perfect Sunglasses', info: 'Golden color sunglasses', price: 92, img: arival3, bgClass: 'bg-yellow-100' },

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