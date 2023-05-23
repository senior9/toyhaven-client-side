import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import { authProvider } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(authProvider);
    const [error,setError] = useState(null) ;
    const navigate =useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    console.log(from);
    console.log(location.state)
    const handleSignIn = (event) => {
      event.preventDefault();
      const form = event.target
      const  email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
        signIn(email,password)
      .then ((result)=>{
          const createUser = result.user
          console.log(createUser);
          navigate(from, { replace: true });
          form.reset();
      })
      .catch((error) => {
          setError(error.message);
          // ..
        });
       
   }
    return (
        <div className='custom-login-bg container mx-auto'>
            <form onSubmit={handleSignIn} action="">
                <h1 className='text-white font-bold text-5xl text-center border-8'>Please Log in  your Accout</h1>
           <div className='flex justify-center flex-col items-center gap-4 p-5'>
            <input type="email" name='email' placeholder="Your email" className="input w-full max-w-xs" />
            {error && <div className="alert alert-danger">{error}</div>}
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