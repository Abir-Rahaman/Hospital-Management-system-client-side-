import React from 'react';
import contact from '../../assets/images/appointment.png'
import './contact.css'
const Contact = () => {
    return (
        <section className='flex justify-center mt-20'  style={{
            background:`url(${contact})`
        }}>
            <div className="hero form-section">
            <div className="pb-24">
            <h3 className="text-xl text-primary text-center font-bold">Contact Us</h3>
                <h2 className="text-3xl text-white text-center ">Stay connected with us</h2>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card flex-shrink-0  shadow-2xl">
                    <div className="card-body form-card">
                        <div className="form-control">
                        <input type="text" placeholder="Email" className="w-full input input-bordered" />
                        </div>
                        <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <textarea type="text" placeholder="Your Massages" className="input input-bordered h-40" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            
        </section>
    );
};

export default Contact;