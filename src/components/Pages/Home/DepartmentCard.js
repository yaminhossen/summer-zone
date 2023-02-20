import React from 'react';

const DepartmentCard = ({ img, bgClass, title, quantity }) => {
    return (
        <div className='text-center'>
            <div className={`flex justify-center items-center rounded-3xl  h-80 lg:h-96 ${bgClass}`}>
                <div className='p-2'>
                    <img src={img} alt="" />
                </div>
            </div>
            <h3 className='text-xl font-bold mt-4'>{title}</h3>
            <h3 className='font-bold text-slate-500 mt-2'>{quantity}+ categories</h3>
        </div>
    );
};

export default DepartmentCard;