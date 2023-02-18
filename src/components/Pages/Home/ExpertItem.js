import React from 'react';

const ExpertItem = ({ item }) => {
    const { img1, img2, img3, img4, color, name, price } = item;
    return (
        <div>
            <div>
                <div className='flex justify-center items-center bg-slate-100 rounded-3xl'>
                    <div className='w-64 py-16'>
                        <img className='' src={img1} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-3'>
                    <div className='flex justify-center items-center bg-slate-100 rounded-2xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img2} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-slate-100 rounded-2xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img3} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-slate-100 rounded-2xl'>
                        <div className='w-auto p-3'>
                            <img className='' src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold mt-2'>{name}</h3>

                <p className='px-4 mt-3 py-1 border-2 rounded-lg  inline border-green-600 font-bold text-green-600'>${price}.00</p>

            </div>
            <div className='flex justify-between mt-2 mx-2'>
                <p className='font-bold text-slate-500'>{color}</p>
                <div className='flex items-center'><p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-bold text-2xl text-orange-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-bold text-2xl text-orange-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-bold text-2xl text-orange-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 font-bold text-2xl text-orange-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>

                </p></div>
            </div>
        </div>
    );
};

export default ExpertItem;