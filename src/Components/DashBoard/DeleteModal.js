import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({delDoctor,setDelDoctor}) => {

    const handleDelete = (email) =>{
        fetch(`http://localhost:4000/doctor/${email}`,{
            method:"DELETE",
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success("Delete Successfully")
                setDelDoctor(null)

            }

        })
    }
    return (
        <div>
                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-800 "> Are You Sure To Delete Mr.{delDoctor.name} </h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                    <button onClick={()=>handleDelete(delDoctor.email)} class="btn btn-error">Delete</button>
                    <label for="delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default DeleteModal;