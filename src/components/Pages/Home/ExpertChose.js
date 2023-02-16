import React from 'react';
import jacket from '../../../images/discover/yellow shirt.png'
import ExpertItem from './ExpertItem';
const expertItems = [
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img: jacket },
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img: jacket },
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img: jacket },
]
const ExpertChose = () => {
    return (
        <div className='mx-28 mb-16'>
            <h2 className='text-4xl font-bold mb-16'>Chosen By Our Experts. <span className='text-4xl font-bold text-gray-500'>What best for you</span></h2>
            <div className='grid grid-cols-3 gap-6
            '>
                {
                    expertItems.map(item => <ExpertItem
                        key={item.id}
                        item={item}
                    ></ExpertItem>)
                }
            </div>
        </div>
    );
};

export default ExpertChose;