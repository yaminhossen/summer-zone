import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../images/logo/logo1.png'
const Header = () => {
    return (
        <div className='sticky top-0' >
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li >
                                <Link to="/men">
                                    Men
                                </Link>
                            </li>
                            <li><Link to="/women">Women</Link></li>
                            <li><Link to="/kids">Kids</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                            <li><Link to="/beauty">Beauty</Link></li>
                        </ul>
                    </div>
                    {/* <div className='my-4'>
                        <div className='lg:ml-28 ml-2 flex items-center'>
                            <div><img className='w-7' src={logo1} alt="" /></div>
                            <div className='font-bold pl-1 text-xl'>Summer-zone</div>
                        </div>
                    </div> */}
                    <Link to="/" className='my-4'>
                        <div className='lg:ml-28 ml-2 flex items-center'><div><img className='w-7' src={logo1} alt="" /></div>
                            <div className='font-bold pl-1 text-xl'>Summer-zone</div></div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text- font-bold text-slate-500">
                        <li >
                            <Link to="/men">
                                Men
                            </Link>
                        </li>
                        <li><Link to="/women">Women</Link></li>
                        <li><Link to="/kids">Kids</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/beauty">Beauty</Link></li>
                    </ul>
                </div>
                <div className="navbar-end lg:mr-24">
                    {/* <a className="pr-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    </Link> */}
                    {/* <a className="pr-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    </Link> */}
                    <Link className='pr-8 font-bold text-slate-500' to="/login">Login</Link>
                    <Link to="/dashboard" className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;