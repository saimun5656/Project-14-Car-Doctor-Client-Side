import React, { useContext, useState } from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Signin = () => {
    const [success,setSuccess]=useState('')
    const [error,seterror]=useState('')
    const {googleSignin}=useContext(AuthContext)
    const handleSubmit=(event)=>{
         event.preventDefault();
         const form =event.target;
         const email =form.email.value;
         const password=form.password.value;
         console.log(email,password);
    }
    const handlegoogleSignin=()=>{
        setSuccess('')
        seterror('')
        googleSignin()
        .then(data=>{
            setSuccess('user login Successfull')
            console.log(data.user);
        })
        .catch(err=>seterror(err.message))
    }
    return (
        <div className="min-h-screen bg-base-200 mt-20">
  <div className="hero-content p-0 justify-between flex-col lg:flex-row gap-12">
    <div className="w-full ">
      <img className='mx-auto md:mx-0' src={loginImg} alt="" />
    </div>
    <div className="w-full card flex-shrink-1  shadow-sm bg-base-100 rounded-sm border border-gray-300">

      <form onSubmit={handleSubmit} className="card-body p-16 ">
        <h1 className='text-5xl mb-6 font-semibold'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" name='password' />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button type='submit' className='btn text-xs border-0 hover:border-[#FF3811] hover:border rounded-sm bg-[#FF3811] me-6 w-full text-white hover:text-black'>SignIn</button>
        </div>
        <div className='text-center space-y-6 mt-4'>
          <h2>Or Sign in with</h2>
          <div>
            <button className='bg-[#E8E8E8] p-3 rounded-full text-[#0A66C2] text-xl me-4'><FaFacebookF/></button>
            <button className='bg-[#E8E8E8] p-3 rounded-full text-[#0A66C2] text-xl me-4'><FaLinkedinIn/></button>
            <button onClick={handlegoogleSignin} className='bg-[#E8E8E8] p-3 rounded-full text-[#0A66C2] text-xl me-4'><FcGoogle/></button>
            
          </div>
          <h1>Do not have an account? <Link to='/account/signup' className='text-[#FF3811] font-semibold'>Sign up</Link></h1>
        </div>
        <h1 className='text-green-600'>{success}</h1>
        <h1 className='text-red-600'>{error}</h1>
      </form>

    </div>
  </div>
</div>
    );
};

export default Signin;