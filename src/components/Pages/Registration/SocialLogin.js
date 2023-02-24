import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading';
const SocialLogin = () => {
    let gerror;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        gerror = <p className='text-red-500'>{error.message}</p>
    }
    // console.log(user);
    // console.log(user?._tokenResponse?.email);
    return (
        <div >
            {gerror}
            <button onClick={() => signInWithGoogle()} className='btn my-4 w-full bg-gray-400 border-none text-gray-600 font-bold hover:bg-gray-500 hover:text-white'>Login by Google</button>
            <br />
            <button className='bg-gray-400 border-none w-full btn mb-4  text-gray-600 font-bold hover:bg-gray-500 hover:text-white'>Login by Facebook</button>
        </div>
    );
};

export default SocialLogin;