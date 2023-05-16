import React, { useContext, useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [confirmed,setConfirmed]=useState(false)
    const { user } = useContext(AuthContext)
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data);
            })
            .catch();
    }, [confirmed])
    const deleteOrder=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/orders/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                   if(data.deletedCount>0)
                   {
                     Swal.fire(
                     'Deleted!',
                     'Your file has been deleted.',
                     'success'
                     );
                     const remaining = orders.filter(od=>od._id!=id);
                     setOrders(remaining)
                   }
                   console.log(data);
                })
                .catch()
            }
        })  
    }
    const updateStatus=(id)=>{
        const update ={status:'confirmed'}
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Conrirm it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/orders/${id}`,{
                    method:'PATCH',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(update)
                })
                .then(res=>res.json())
                .then(data=>{
                   if(data.modifiedCount>0)
                   {
                     Swal.fire(
                     'Confirmed!',
                     'Your order has been Confirmed.',
                     'success'
                     );
                     const remaining = orders.filter(od=>od._id!=id);
                     setOrders(remaining)
                     setConfirmed(!confirmed)
                   }
                   console.log(data);
                })
                .catch()
            }
        })  
    }
    console.log(orders);
    return (
        <div>
            <h1>Cart Details</h1>
            <h1>order : {orders.length}</h1>

            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row*/}
                        {
                            orders.map(od=><OrderCard key={od._Id} order={od} deleteOrder={deleteOrder} updateStatus={updateStatus}></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyOrders;