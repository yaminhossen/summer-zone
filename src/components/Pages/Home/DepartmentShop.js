import React from 'react';
import product from '../../../images/discover/yellow shirt.png'
import DepartmentCard from './DepartmentCard';
const DepartmentShop = () => {
    return (
        <div className='mx-28'>
            <h2 className='mt-20 mb-12 text-4xl font-bold'>Shop by department</h2>
            <div className=' grid grid-cols-4 gap-4'>
                <DepartmentCard
                    img={product}
                    bgClass='bg-blue-50'
                    title='Travel Kits'
                    quantity='20'
                ></DepartmentCard>
                <DepartmentCard
                    img={product}
                    bgClass='bg-slate-50'
                    title='Beauty Products'
                    quantity='10'
                ></DepartmentCard>
                <DepartmentCard
                    img={product}
                    bgClass='bg-purple-50'
                    title='Sport Kits'
                    quantity='30'
                ></DepartmentCard>
                <DepartmentCard
                    img={product}
                    bgClass='bg-orange-50'
                    title='Cycling Kits'
                    quantity='40'
                ></DepartmentCard>
            </div>
        </div>
    );
};

export default DepartmentShop;