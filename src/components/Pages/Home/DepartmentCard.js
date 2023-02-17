import React from 'react';

const DepartmentCard = ({ img, bgClass, title, quantity }) => {
    return (
        <div className='text-center'>
            <div className={`flex justify-center items-center rounded-3xl ${bgClass}`}>
                <div className='w-44 pt-20 '>
                    <img src={img} alt="" />
                </div>
            </div>
            <h3 className='text-xl font-bold mt-4'>{title}</h3>
            <h3 className='font-bold text-slate-500 mt-2'>{quantity}+ categories</h3>
        </div>
    );
};

export default DepartmentCard;