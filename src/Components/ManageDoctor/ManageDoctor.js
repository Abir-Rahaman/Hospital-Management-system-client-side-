import React, { useState } from 'react';
import { useEffect } from 'react';
import DeleteModal from '../DashBoard/DeleteModal';
const ManageDoctor = () => {
  
    const [doctors, setDoctors] =useState([])
    const [delDoctor,setDelDoctor]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:4000/doctor",{
            headers:{
              authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setDoctors(data))

    },[])

    
   
    
    return (
        <div className='mt-20 lg:w-full lg:px-60'>
           <h1> Doctors {doctors.length} </h1> 
           <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
        <tr>
            <th></th>
            <th>Profile</th>
            <th>Doctor Name</th>
            <th> Specialist  </th>
            <th> Action</th>
            
        </tr>
        </thead>
        <tbody>
            {
                doctors.map((doctor,index) => <tr>
                    <th>{index+1}</th>
                    <td> <div class="avatar">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={doctor.img} alt="" />
                            </div>
                    </div></td>
                    <td>{doctor.specialist}</td>
                    <td>Quality Control Specialist</td>
                    <td> 
                    <label onClick={() => setDelDoctor(doctor)} for="delete-modal" class="btn btn-sm btn-error">Delete</label>
                     </td>

                    
                </tr> )
            }
    </tbody>
  </table>

</div>
{delDoctor && <DeleteModal delDoctor={delDoctor} setDelDoctor={setDelDoctor} ></DeleteModal> }

        </div>
    );
};

export default ManageDoctor;