import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='custom-login-bg container mx-auto'>
            <form action="">
                <h1 className='text-white font-bold text-5xl text-center border-8'>Please Create your Accout</h1>
           <div className='flex justify-center flex-col items-center gap-4 p-5'>
        
           <input type="text" name='name' placeholder="Your name" className="input w-full max-w-xs" />
            <input type="text" name='photo' placeholder="Your photo-url" className="input w-full max-w-xs" />
            <input type="email" name='email' placeholder="Your email" className="input w-full max-w-xs" />
            <input type="password" name='password' placeholder="password" className="input w-full max-w-xs" />
            <p className='text-white'><span>Already have an account ? </span> <Link className='text-orange-600' to="/login">Please Log in</Link></p>
            <button type='submit' className='btn custom-btn'>
                Submit
            </button>
           </div>

            
            </form>
            
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;