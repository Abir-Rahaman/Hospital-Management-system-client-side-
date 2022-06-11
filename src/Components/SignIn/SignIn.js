import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading'
import useToken from './../Hooks/useToken';


const SignIn = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const {token} = useToken(user)
    const navigate = useNavigate()
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    let customError;

    if(token){
        return <Loading></Loading>
    }
    if(error || updateError){
        customError= <p className='font-bold text-red-800 text-center'> <small> {error?.message || updateError.message} </small> </p>

    }

    const onSubmit =async data => {
        // console.log(data)
       await createUserWithEmailAndPassword( data.email , data.password);
       await updateProfile({displayName:data.name})
       console.log(updateProfile);
       navigate("/appointment")

    };
    return (
        <div className="flex justify-center mt-16 mx-auto">
        <div class="card  form-section shadow-2xl">
        <div class="card-body mx-auto w-96">
            <h2 class="text-center font-bold text-cyan-400 text-4xl">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })}
                />
                <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
            </div>
            {customError}
            <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
            </form>
           
            <p className='font-bold text-center'>Already Have An Account <Link to="/login" ><span className='text-cyan-500'> Log In </span> </Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignIn;