import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const OrderForm = ({service}) => {
  const {user} = useContext(AuthContext);
   const {_id,title,price,img}=service
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const date = form.date.value;
        const phone= form.phone.value;
        const message=form.message.value;
        const order= {
         email,
         customerName: name,
         date,
         phone,
         serviceName: title,
         price,
         message,
         img
      };
        console.log(order);
        fetch('http://localhost:4000/orders',{
         method:'POST',
         headers: {'content-type' : 'application/json'},
         body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data)
         data.insertedId?Swal.fire({
            title: 'Success',
            text: 'Order Booked successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          }):''
      })
    }
return (
 <div className="bg-white rounded-md mt-10">
    <form onSubmit={handleSubmit} className="card-body p-16 ">
      <div className='grid md:grid-cols-2 gap-5'>
         <div className="form-control">
            <input type="text" placeholder="Your Name" className="input border-0 rounded-sm bg-[#f2f2f2] input-bordered" name='name'/>
         </div>
         <div className="form-control">
            <input type="date" placeholder="date" className="input border-0 rounded-sm bg-[#f2f2f2] input-bordered" name='date' />
         </div>
         <div className="form-control">
            <input type="text" placeholder="Phone Number" className="input border-0 rounded-sm bg-[#f2f2f2] input-bordered" name='phone' />
         </div>
         <div className="form-control">
            <input type="text" placeholder="email" className="input border-0 rounded-sm bg-[#f2f2f2] " name='email' defaultValue={user?.email} />
        </div>      
      </div>   
      <textarea className='bg-[#f2f2f2] p-5 mt-5' name="message" placeholder='message' id="" cols="30" rows="6"></textarea>      
      <div className="form-control mt-6">
            <button type='submit' className='btn text-xs border-0 hover:border-[#FF3811] hover:border rounded-sm bg-[#FF3811] me-6 w-full text-white hover:text-black'>Signup</button>
      </div>
    </form>

            
        </div>
    );
};

export default OrderForm;