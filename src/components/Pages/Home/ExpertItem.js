import React from 'react';

const ExpertItem = ({ item }) => {
    const { img, color, name, price } = item;
    return (
        <div>
            <div>
                <div className='flex justify-center items-center bg-slate-100 rounded-3xl'>
                    <div className='w-64 p-8'>
                        <img className='' src={img} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-3'>
                    <div className='flex justify-center items-center bg-slate-100 rounded-3xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-slate-100 rounded-3xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-slate-100 rounded-3xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold mt-2'>{name}</h3>

                <p className='px-4 mt-3 py-1 border-2 rounded-lg  inline border-green-600 font-bold text-green-600'>${price}.00</p>

            </div>
            <p className='font-bold text-slate-500'>{color}</p>
        </div>
    );
};

export default ExpertItem;