import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({modal ,date,setModal,refetch}) => {
    const {_id,name,slots,price} = modal;
    const formattedDate = format(date,'PP');
    const [user] = useAuthState(auth)
    const handleBook = e =>{
        e.preventDefault();
        const slot = e.target.slot.value;
     
        const booking = {
            treatmentID:_id,
            treatment:name,
            slot,
            patientEmail:user.email,
            patientName:user.displayName,
            date: formattedDate,
            price,
            phone:e.target.phone.value
        }
        fetch("http://localhost:4000/booking",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data => {
            setModal(null)
            console.log(data);
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch()
            

        })

    }
    return (
        <div className=''>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box lg:w-96">
                <label for="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-cyan-300">{name}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-2 justify-items-center mt-5'>
                    <input type="text" disabled readOnly value={format(date,'PP')}  className="input input-bordered input-info w-full max-w-xs" />
                    <select name='slot' className="select select-info w-full max-w-xs">
                        {
                            slots.map((slot,index) => <option  key={index} value={slot}>{slot}</option>)
                        } 
                     </select>
                    <input type="text" name='name' disabled readOnly value={user?.displayName || "not found"} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="text" name='price' disabled readOnly value={price || "not found"} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="email" name='email' disabled readOnly value={user?.email || "not found"} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Your Contact Number" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="submit" value='submit' placeholder="Type here" className="btn btn-primary" /> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
