import React from 'react';
    
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit ,reset } = useForm();

    const {data:services , isLoading} = useQuery('service',()=> fetch("http://localhost:4000/service").then(res=> res.json()))
    const imgStorageKey='69fb380d3c03cfe1603dcae97afcc89a';
    if(isLoading){
        return <isLoading></isLoading>
    }


    const onSubmit = data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method:"POST",
            body: formData

        })
        
            const img = data.url;
            console.log(img);
            const doctor = {
                name : data.name,
                email: data.email,
                specialist : data.Specialist,
                img:img,
            
            }
         
            console.log(doctor);

            fetch("http://localhost:4000/doctor",{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('token')}`

                },
                body:JSON.stringify(doctor),

            })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                if(inserted.insertedId){
                    toast.success("Added Successfully")
                    reset()
                }
                else{
                    toast.error("Not Found ")
                    reset()
                }
            })

       
        
    }
        
    return (
        <>
        <h2 className='text-3xl text-cyan-400 mt-12 font-bold'> Add Expert & Best Doctor</h2>
        <form className='w-96 mt-12 ml-20' onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Doctor Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Doctor Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Doctor Name is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Doctor Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Doctor Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Doctor Email is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Specialist</span>
                </label>
                <select {...register('Specialist')} class="select select-bordered w-full max-w-xs">
                       
                        {
                            services.map(service => <option key={service._id}>{service.name}</option> )
                        }
               </select>
                <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Doctor Profile</span>
                </label>
                <input
                    type="file"
    
                    className="input w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Doctor Image is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
            </div>
            </div>
            <input className='btn w-full max-w-xs text-white' type="submit" value=" Add Doctor " />
            </form>
            </>
    )};

export default AddDoctor;