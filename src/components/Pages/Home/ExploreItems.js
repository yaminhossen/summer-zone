import React from 'react';

import backpack from '../../../images/discover/yellow shirt.png'
import ExploreItem from './ExploreItem';
const exploreItems = [
    { quant: 122, quality: 'Manufacturar', name: 'Backpack', img: backpack, id: 1 },
    { quant: 171, quality: 'Manufacturar', name: 'Shoes', img: backpack, id: 2 },
    { quant: 142, quality: 'Manufacturar', name: 'Cycling Shorts', img: backpack, id: 3 },
    { quant: 233, quality: 'Manufacturar', name: 'Cycling Jersey', img: backpack, id: 4 },
    { quant: 241, quality: 'Manufacturar', name: 'Car Coat', img: backpack, id: 5 },
    { quant: 151, quality: 'Manufacturar', name: 'Recycled Blanket', img: backpack, id: 6 },

]
const ExploreItems = () => {
    return (
        <div className='mt-12 mx-28'>
            <h3>This is the explore item pages</h3>
            <div className='grid grid-cols-3 gap-6'>
                {exploreItems.map(item => <ExploreItem
                    key={item.id}
                    item={item}
                ></ExploreItem>)}
            </div>
        </div>
    );
};

export default ExploreItems;