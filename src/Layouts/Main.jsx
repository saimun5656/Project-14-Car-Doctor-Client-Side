import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=' bg-[#F3F3F3]'>
            <div className='w-11/12 max-w-screen-xl	 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;