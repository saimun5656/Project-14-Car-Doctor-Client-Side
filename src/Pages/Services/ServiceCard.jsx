import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-md border border-gray-300">
            <figure className='p-4'><img className='h-64 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body flex flex-row justify-between items-end">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-[#FF3811] font-semibold'>Price : ${price}</p>
                </div>

               <Link to={`/checkout/${_id}`}>
               <button className="btn py-1 ps-5 text-2xl text-[#FF3811] border-0"><BsArrowRight/></button>
               </Link>

            </div>
        </div>
    );
};

export default ServiceCard;