import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='md:flex flex flex-col gap-y-36 md:flex-row my-20 gap-5'>
            <div className='relative'>
                  <img className='w-9/12 rounded-md' src={person} alt="" />
                  <img className='w-6/12 absolute top-44 right-10 border-l-8 border-white border-t-8 rounded-md ' src={parts} alt="" />
            </div>
            <div className='space-y-5'>
                <h2 className='text-xl text-[#FF3811] font-semibold'>About Us</h2>
                <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className='btn text-xs border-0 rounded-sm bg-[#FF3811] me-6 hover:border-[#FF3811] hover:border-2'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;