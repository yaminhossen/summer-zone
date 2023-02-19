import React from 'react';
import ExpertItem from './ExpertItem';
import jacket1 from '../../../images/expert/bomber (1).png'
import jacket2 from '../../../images/expert/bomber (2).png'
import jacket3 from '../../../images/expert/bomber (3).png'
import shoe1 from '../../../images/expert/sneakars (1).png'
import shoe2 from '../../../images/expert/sneakars (2).png'
import shoe3 from '../../../images/expert/sneakars (3).png'
import shoe4 from '../../../images/expert/sneakars (4).png'
import bag1 from '../../../images/expert/vanity (1).png'
import bag2 from '../../../images/expert/vanity (2).png'
import bag3 from '../../../images/expert/vanity (3).png'
import bag4 from '../../../images/expert/vanity (4).png'

const expertItems = [
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img1: jacket1, img2: jacket2, img3: jacket3, img4: jacket1 },
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img1: shoe1, img2: shoe2, img3: shoe3, img4: shoe4 },
    { id: 1, name: 'Suede Bomber Jacket', color: 'Orange', price: 52, img1: bag1, img2: bag2, img3: bag3, img4: bag4 },
]
const ExpertChose = () => {
    return (
        <div className='mx-12 lg:mx-28 mb-16'>
            <h2 className='text-4xl font-bold mb-16'>Chosen By Our Experts. <span className='text-4xl font-bold text-gray-500'>What best for you</span></h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
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