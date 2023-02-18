import React from 'react';
import travel from '../../../images/department/travel.png'
import beauty from '../../../images/department/beauty.png'
import sport from '../../../images/department/sport.png'
import cycling from '../../../images/department/cycling.png'
import DepartmentCard from './DepartmentCard';
const DepartmentShop = () => {
    return (
        <div className='mx-28'>
            <h2 className='mt-20 mb-12 text-4xl font-bold'>Shop by department</h2>
            <div className=' grid grid-cols-4 gap-4'>
                <DepartmentCard
                    img={travel}
                    bgClass='bg-blue-100'
                    title='Travel Kits'
                    quantity='20'
                ></DepartmentCard>
                <DepartmentCard
                    img={beauty}
                    bgClass='bg-pink-100'
                    title='Beauty Products'
                    quantity='10'
                ></DepartmentCard>
                <DepartmentCard
                    img={sport}
                    bgClass='bg-orange-100'
                    title='Sport Kits'
                    quantity='30'
                ></DepartmentCard>
                <DepartmentCard
                    img={cycling}
                    bgClass='bg-red-100'
                    title='Cycling Kits'
                    quantity='40'
                ></DepartmentCard>
            </div>
        </div>
    );
};

export default DepartmentShop;