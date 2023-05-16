import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderForm from './OrderForm/OrderForm';

const CheckOut = () => {
    const service =useLoaderData()
    const {_id,title,price,img}=service
    return (
        <div>
            <h1>{title}</h1>
            <OrderForm service={service}></OrderForm>
        </div>
    );
};

export default CheckOut;