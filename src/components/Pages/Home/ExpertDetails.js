import React from 'react';
import jacket1 from '../../../images/explore/sneakars (1).png'
import jacket2 from '../../../images/explore/sneakars (2).png'
import jacket3 from '../../../images/explore/sneakars (4).png'

const ExpertDetails = () => {
    return (
        <div className='mx-28 my-14'>
            <div className='flex'>
                <div className='lg:w-3/5 lg:mr-8 '>
                    <div className=' lg:h-96 flex justify-center items-center bg-yellow-100 rounded-xl  overflow-hidden'>
                        <img className='lg:p-10 w-full' src={jacket1} alt="" />
                    </div>
                </div>

                <div className='w-2/5 hidden lg:block'>
                    <div>
                        <div className='  flex justify-center items-center bg-yellow-100 rounded-xl h-48 overflow-hidden '>
                            <img className=' w-full p- ' src={jacket2} alt="" />
                        </div>
                        <div className='  flex justify-center items-center bg-yellow-100 rounded-xl -5 h-40 overflow-hidden mt-8'>
                            <img className=' w-full ' src={jacket3} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex'>
                <div className='w-4/6'>
                    <h3 className='font-bold text-2xl my-8'>Sustainable Export Shoe</h3>
                    <p className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 pt-1 h-5 text-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>4.9 - <span className='underline'>142 reviews.</span>

                    </p>
                    {/* <div><p className='p-2 mt-5 bg-slate-300 font-bold text-slate-600 rounded-lg'>Description</p></div> */}
                    <div>
                        <div className="collapse collapse-arrow mt-8">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  bg-slate-400 rounded-lg text-primary-content peer-checked:bg-gray-300 peer-checked:text-slate-500 font-bold">
                                Description
                            </div>
                            <div className="collapse-content  text-primary-content peer-checked:
                        peer-checked:text-gray-600">
                                <p className='mt-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quis cum, dolor maiores ab facilis nostrum qui modi, ea aspernatur sed ratione non quia adipisci! Ipsum voluptatem consequuntur dignissimos libero?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mt-8">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  bg-slate-400 rounded-lg text-primary-content peer-checked:bg-gray-300 peer-checked:text-slate-500 font-bold">
                                Fabric + care
                            </div>
                            <div className="collapse-content  text-primary-content peer-checked:
                        peer-checked:text-gray-600">
                                <ul className='mt-7'>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quod.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mt-8">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  bg-slate-400 rounded-lg text-primary-content peer-checked:bg-gray-300 peer-checked:text-slate-500 font-bold">
                                How it Fits
                            </div>
                            <div className="collapse-content  text-primary-content peer-checked:
                        peer-checked:text-gray-600">
                                <p className='my-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quis cum, dolor maiores ab facilis nostrum qui modi, ea aspernatur sed ratione non quia adipisci! Ipsum voluptatem consequuntur dignissimos libero?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mt-8">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  bg-slate-400 rounded-lg text-primary-content peer-checked:bg-gray-300 peer-checked:text-slate-500 font-bold">
                                FAQ
                            </div>
                            <div className="collapse-content  text-primary-content peer-checked:
                        peer-checked:text-gray-600">
                                <ul className='mt-7'>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quod.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/6  m-4 '>
                    <div className=' mt-8 shadow-lg border-t-8 shadow-slate-300 p-4 rounded-lg h-full '>

                        <div className='flex justify-between'>
                            <h3 className='text-xl font-bold '>$122.00</h3>
                            <p className='flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 pt-1 h-5 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>4.9 - <span className='underline'>142 reviews.</span>

                            </p>
                        </div>
                        <div className='my-5'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia!</h3>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia!</h3>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia!</h3>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia!</h3>
                        </div>
                        <div className='flex justify-between mt-10 mb-4'>
                            <button className='p-3 font-bold text-center w-full border-2 mt- rounded-xl bg-slate-500 text-white hover:bg-slate-600'>Buy Now</button>
                            <button className='p-3 font-bold text-center w-full border-2  rounded-xl bg-slate-500 text-white hover:bg-slate-600'>Add to Cart</button>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className='font-bold text-lg'>Total:</h3>
                            <p className='font-bold text-lg'>$122.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExpertDetails;