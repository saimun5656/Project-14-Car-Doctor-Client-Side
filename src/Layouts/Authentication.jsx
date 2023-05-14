import React from 'react';
import Navbar from '../Pages/Authentication/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='w-11/12 max-w-screen-xl	 mx-auto '>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Authentication;