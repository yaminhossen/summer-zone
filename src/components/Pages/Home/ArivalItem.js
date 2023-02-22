import React from 'react';
import './ArivalItem.css'

const ArivalItem = ({ arrive }) => {
    const { img, name, info, price, bgClass } = arrive;
    return (
        <div>
            <div className='frame rounded-3xl'>
                <div className={` h-96 p-8  flex justify-center rounded-3xl ${bgClass}`}>
                    <img className='image ' src={img} alt="" />

                </div>
                <div className='h-96 info w-full rounded-3xl'>
                    <div className='h-44 bg-red-300 flex justify-center pt-28 rounded-t-3xl bg-opacity-30'>
                        <button className='btn md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold'>Buy Now</button>
                    </div>
                    <div className='h-44 bg-red-300 flex justify-center  rounded-b-3xl mt-8 bg-opacity-30'>
                        <button className='btn md:btn-md lg:btn-md bg-gray-200 border-none text-black hover:text-white hover:font-bold mt-4'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='pl-4'>
                <h3 className=' text-2xl text-slate-700 font-bold mt-6'>{name}</h3>
                <h4 className='text-slate-500 font-bold mb-4'>{info}</h4>
                <div className='flex space-x-20'>
                    <div>
                        <p className='px-8 py-1 border-2 rounded-lg  inline border-green-600 font-bold text-green-600'>${price}.00</p>
                    </div>
                    <div>
                        <p className='flex'>
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

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArivalItem;