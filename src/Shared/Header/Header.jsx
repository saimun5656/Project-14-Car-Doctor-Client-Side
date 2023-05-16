import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logout} = useContext(AuthContext)
  const navItems =<>
              <li><Link to='/' className='font-semibold text-xl'>Home</Link></li>
              <li><Link className='font-semibold text-xl'>About</Link></li>
              <li><Link className='font-semibold text-xl'>Services</Link></li>
              <li><Link to='/orders' className='font-semibold text-xl'>My Order</Link></li>
              {
               user?
               <> 
                  <li><Link onClick={logout} className='font-semibold text-xl'>Logout</Link></li>
               </>: <li><Link to='account/signin' className='font-semibold text-xl'>Login</Link></li>
              }   
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {
              navItems
             }
            </ul>
          </div>
          <Link to='/'><img className='w-1/2' src="/src/assets/logo.svg" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn hover:bg-red-500 border-red-500 text-red-500 hover:text-white hover:border-gray-700">Appoinment</button>
        </div>
      </div>
    );
};

export default Header;