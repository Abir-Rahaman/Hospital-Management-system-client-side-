import React from 'react';
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import useToken from './../Hooks/useToken';


const LogIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {token} = useToken(user || googleUser)

    let customError;

    if(loading || googleLoading){
        return <Loading></Loading>
    }
    if(error || googleError){
        customError= <p className='font-bold text-red-800 text-center'> <small> {error?.message || googleError?.message} </small> </p>

    }
    
    if(token){
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email , data.password);
    };
    return (
        <div className="flex justify-center mt-16 mx-auto">
            <div class="card  form-section shadow-2xl">
            <div class="card-body mx-auto w-96">
                <h2 class="text-center font-bold text-cyan-400 text-4xl">Log In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

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
                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                </form>
               
                <p className='font-bold text-center'>New to Portal? <Link to="/SignIn" ><span className='text-cyan-500'> Create An Account</span> </Link> </p>
                <div class="divider">OR</div>
                <button onClick={()=>signInWithGoogle()}  class="btn btn-outline btn-accent font-bold">Log In with Google sign in</button>
            </div>
          </div>
        </div>
    );
};

export default LogIn;