import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services ,setServices]=useState([])
    useEffect(()=>{
        fetch('./public/data/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch();

    },[])
    return (
        <div className='my-10'>
           <div className='space-y-6 text-center mb-10'>
           <h2 className='text-xl text-[#FF3811] font-semibold'>Services</h2>
            <h3 className='text-5xl font-bold'>Our Service Area</h3>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default Services;