import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    // const navigate = useNavigate()
    const [user] =useAuthState(auth);
    const [appointments ,setAppointments]=useState([])
    console.log("sadhnsjfhnsd",appointments);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:4000/booking?patientEmail=${user.email}`,{
                method:"GET",
                headers: {
                    authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
        .then(res=>{
            // if(res.status === 401 || res.status === 403){
            //     signOut(auth);
            //     localStorage.removeItem('token')
            // }
            return res.json()
        })
        .then(data => setAppointments(data))
        }
    },[user])

    return (
        <div className='mt-20 lg:w-full lg:px-60'>
            <h2>appointment :{appointments.length} </h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th> date </th>
                <th> Time </th>
                <th> Payment </th>
            </tr>
            </thead>
            <tbody>
                {
                    appointments.map(a=><tr>
                        <th>1</th>
                        <td>{a.patientName}</td>
                        <td>{a.treatment}</td>
                        <td>{a.date}</td>
                        <td>{a.slot}</td>
                        <td>
                            {(a.price && !a.paid ) && <Link to={`/dashboard/payment/${a._id}`}> <button class="btn btn-success">Payment</button> </Link>}
                            {(a.price && a.paid) &&  <div>
                                <p><span className='text-success'><button className='btn btn-success btn-xs'>Paid</button> </span></p>
                                    <p className='font-bold'>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                            </div>}
                        </td>

                    </tr> )
                }

            </tbody>
        </table>
        </div>
    </div>
    );
};

export default MyAppointment;