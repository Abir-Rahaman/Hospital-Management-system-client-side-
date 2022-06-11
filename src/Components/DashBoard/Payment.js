import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L18qLA4o5tgtQUCryMTWsArjQnagTRL3XcMoVH0cAkohaEhOUYXvMKqPe9i6FqYQoJjrJ2ZVxyPaYiEpoWkLNxP00Asyqdyam');
    const [user] = useAuthState(auth)
    const {id} =useParams();
    const url=`http://localhost:4000/booking/${id}`
    const {data:appointment, isLoading} = useQuery(['booking',id], ()=> fetch(url,{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem('token')}`
          }
    }).then(res => res.json()))
    console.log(appointment);
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='mt-20'>
              <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h1 className='text-xl font-bold text-cyan-400'> Hello {appointment.patientName} </h1>
                    <h2 class="card-title font-bold"> Please Pay For {appointment.treatment} </h2>
                    <p className='font-bold'> Your Appointment: {appointment.date} Sharp {appointment.slot}  </p>
                    <p className='font-bold'> Please Pay: ${appointment.price}  </p>
                </div>
              </div>
              <div class="card w-96 bg-base-100 mt-10 shadow-2xl">
                <div class="card-body ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
                    
                </div>
              </div>
            </div>
    );
};

export default Payment;