import React from 'react';

import bag from '../../../images/explore/Explore (1).png'
import tshirt from '../../../images/explore/Explore (2).png'
import recycled from '../../../images/explore/Explore(3).png'
import jersey from '../../../images/explore/Explore (4).png'
import hill from '../../../images/explore/Explore(5).png'
import ExploreItem from './ExploreItem';
const exploreItems = [
    { quant: 122, quality: 'Manufacturar', name: 'Backpack', img: bag, id: 1 },
    { quant: 171, quality: 'Manufacturar', name: 'Shoes', img: hill, id: 2 },
    { quant: 142, quality: 'Manufacturar', name: 'Cycling Shorts', img: tshirt, id: 3 },
    { quant: 233, quality: 'Manufacturar', name: 'Cycling Jersey', img: jersey, id: 4 },
    { quant: 241, quality: 'Manufacturar', name: 'Travel bag', img: bag, id: 5 },
    { quant: 151, quality: 'Manufacturar', name: 'Recycled Product', img: recycled, id: 6 },

]
const ExploreItems = () => {
    return (
        <div className='mt-16 mx-28'>
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