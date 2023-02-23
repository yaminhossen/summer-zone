import React from 'react';
import '../Home/DepartmentCard.css'
import { Link } from 'react-router-dom';
import logo1 from '../../../images/logo/logo1.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    console.log(user?.displayName);
    return (
        <div className='sticky top-0 ' >
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
                    {
                        user ?
                            <button className='pr-8 font-semibold text-blue-500' >login by {user?.email}</button>
                            :
                            <></>
                    }
                    {
                        user ?
                            <button className='pr-8 font-bold text-slate-500' onClick={handleSignOut}>LogOut</button>
                            :
                            <Link className='pr-8 font-bold text-slate-500' to="/login">Login</Link>
                    }

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