import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='custom-login-bg container mx-auto'>
            <form action="">
                <h1 className='text-white font-bold text-5xl text-center border-8'>Please Log in  your Accout</h1>
           <div className='flex justify-center flex-col items-center gap-4 p-5'>
            <input type="email" name='email' placeholder="Your email" className="input w-full max-w-xs" />
            <input type="password" name='password' placeholder="password" className="input w-full max-w-xs" />
            <p className='text-white'><span>Are you new here ? </span> <Link className='text-orange-600' to="/register">Create an account</Link></p>
            <button type='submit' className='btn custom-btn'>
                Log in 
            </button>
           </div>

            
            </form>
            
        </div>
    );
};

export default Login;