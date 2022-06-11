import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({appointment}) => {
    const {_id,price,patientEmail,patientName}=appointment;
    const stripe =useStripe()
    const elements = useElements()
    const [paymentError , setPaymentError] = useState('')
    const [proccessing , setProcessing] = useState(false)
    const [paymentId , setPaymentId] = useState('')
    const [success , setSuccess] = useState('')
    const [clientSecret,setClientSecret]=useState('')
    useEffect(()=>{
      fetch("http://localhost:4000/create-payment-intent",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify({price})
      })
      .then(res => res.json())
      .then(data =>{
        if(data?.clientSecret){
         setClientSecret(data.clientSecret)
        }

      })
    },[price])
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }

        const {error , paymentMethod}=await stripe.createPaymentMethod({
          type: 'card',
          card
           
        })
        setPaymentError(error?.message || "")

        setSuccess("")
        setProcessing(true)

        const {paymentIntent, cardError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name:patientName,
                email:patientEmail,
              },
            },
          },
        );
        if(cardError){
          setPaymentError(cardError?.message)
          setProcessing(false)
        }
        else{
          setPaymentError("")
          setPaymentId(paymentIntent.id)
          setSuccess(`Congratulations ${patientName}, Your Payment Is Successfully Done & Your Transaction Id :${(paymentIntent.id)} `)
          const payment = {
            appointment : _id,
            transactionId: paymentIntent.id,
          }
          fetch(`http://localhost:4000/booking/${_id}`,{
            method:"PATCH",
            headers:{
              "content-type":"application/json",
              authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify(payment)
          }).then(res => res.json())
          .then(data =>{
            console.log(data);
            setProcessing(false)

          })


        }


    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success font-bold btn-sm text-white' type="submit" disabled={!stripe || !clientSecret}>
        Payment
      </button>
    </form>
          {
              paymentError && <p className='font-bold text-red-800'> { paymentError}</p>
          }
          {
              success && <p className='font-bold text-green-800'> {success}</p>
          }
        </>
    );
};

export default CheckoutForm;