import React from 'react';

const OrderCard = ({ order, deleteOrder, updateStatus}) => {
    const {_id,serviceName,customerName, img, date, price, phone,status} = order;
    console.log(status);
    return (
        <tr>
            <th>
            <button onClick={()=>deleteOrder(_id)} className="btn bg-[#e63a18e6] border hover:border hover:border-[#e63a18e6] text-white hover:text-gray-700 ">Delete</button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded-md w-24 h-24">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td className='space-y-3'>
                <h1 className='font-semibold text-2xl'>{serviceName}</h1>
                <p>Billing name :{customerName}</p>
                <p>Phone : {phone}</p>
            </td>
            <td className='font-semibold'>${price}</td>
            <td>
                {date}
            </td>
            <td className='text-end'>
                {
                    status?<span>{status}</span>:<button onClick={()=>updateStatus(_id)} className="btn bg-[#e63a18e6] border hover:border hover:border-[#e63a18e6] text-white hover:text-gray-700 ">pending</button>
                }
                
            </td>
        </tr>
    );
};

export default OrderCard;