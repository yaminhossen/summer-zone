import React from 'react';
import { Link } from 'react-router-dom';
import item1 from '../../../images/discover/discover (1).png'
import item2 from '../../../images/discover/discover (2).png'
import item3 from '../../../images/discover/yellow shirt.png'
import item4 from '../../../images/expert/bomber (1).png'
import item5 from '../../../images/expert/bomber (2).png'
import item6 from '../../../images/expert/bomber (3).png'
import item7 from '../../../images/expert/sneakars (1).png'
import item8 from '../../../images/expert/sneakars (2).png'
import item9 from '../../../images/expert/sneakars (3).png'
import item10 from '../../../images/expert/sneakars (4).png'
import item11 from '../../../images/expert/vanity (1).png'
import item12 from '../../../images/expert/vanity (2).png'
import item13 from '../../../images/expert/vanity (4).png'
import item14 from '../../../images/explore/arrival (1).png'
import item15 from '../../../images/explore/arrival3.png'
import item16 from '../../../images/explore/Explore (1).png'
import item17 from '../../../images/explore/Explore (2).png'
import AllItem from './AllItem';

const items = [
    { id: 1, img: item17, name: 'Handmade dol', info: 'Twin handmade dol', price: 43 },
    { id: 2, img: item16, name: 'Busket ball', info: 'Orizinal imported ball', price: 32 },
    { id: 3, img: item3, name: 'T-shirt', info: 'Raw yellow t-shirt', price: 43 },
    { id: 4, img: item4, name: 'Bomber jacket', info: 'Perfect finishing bomber jacket', price: 73 },
    { id: 5, img: item5, name: 'Bomber jacket', info: 'Perfect finishing bomber jacket', price: 43 },
    { id: 6, img: item6, name: 'Bomber jacket', info: 'Perfect finishing bomber jacket', price: 83 },
    { id: 7, img: item7, name: 'Exported sneakers', info: 'Gray fine rough sneakers', price: 43 },
    { id: 8, img: item8, name: 'Exported sneakers', info: 'Gray fine rough sneakers', price: 54 },
    { id: 9, img: item9, name: 'Exported sneakers', info: 'Gray fine rough sneakers', price: 47 },
    { id: 10, img: item10, name: 'Exported sneakers', info: 'Gray fine rough sneakers', price: 49 },
    { id: 11, img: item11, name: 'Vanity bag', info: 'Exported leather vanity', price: 63 },
    { id: 12, img: item12, name: 'Vanity bag', info: 'Exported leather vanity', price: 83 },
    { id: 13, img: item13, name: 'Vanity bag', info: 'Exported leather vanity', price: 73 },
    { id: 14, img: item14, name: 'Poly-cotton belt', info: 'Raw color twin belt', price: 43 },
    { id: 15, img: item15, name: 'Sunglases', info: 'Black and gold sunglass', price: 24 },
    { id: 16, img: item2, name: 'Travel bag', info: 'Purple trolly bag', price: 33 },
    { id: 17, img: item1, name: 'T-shirt', info: 'Black t-shirt', price: 23 },
]
const AllItems = () => {
    return (
        <div className='mx-12 lg:mx-28 my-14'>
            <h3 id='top' className='text-5xl font-bold font-mon'>Man collection</h3>
            <h3 className='font-semibold  text-slate-600 text-xl my-5'>Discover more. Which is good for you.</h3>
            <div className="flex flex-col w-full">

                <div className="divider "></div>

            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4
            gap-12 '>
                {
                    items.map(item => <AllItem
                        key={item.id}
                        item={item}
                    ></AllItem>)
                }

            </div>
            <div className=' mt-10 ml-12 flex flex-row-reverse'>
                <Link className='rounded ring-2 ring-blue-500 px-12 py-2 text-xl font-bold hover:bg-blue-500 hover:text-white ' to="/allItem" >See more...</Link>
            </div>
        </div>
    );
};

export default AllItems;