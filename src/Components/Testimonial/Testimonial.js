import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people2 from '../../assets/images/people2.png'
import people1 from '../../assets/images/people1.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
       <section className="">
            <div className='flex items-center justify-between px-32 mt-32'>
            <div className="">
            <h1 className='font-bold text-cyan-600 '> Testimonial</h1>
            <h2 className='text-3xl font-bold'>What Our Patients Says</h2>
            </div> 
            <div className="">
                <img className='w-40' src={quote} alt="" />
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-32">
        <div className="card w-96  pb-9 bg-base-100 shadow-2xl">
            <div className="card-body px-8">
                <p className=''><small> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</small> </p>
            </div>
        <div className="flex items-center justify-center">
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people1} />
            </div>
        </div>
        <div className="pl-4">
        <h2 className='text-xl font-bold'>Abir Rahaman </h2>
        <h1 className='font-bold text-cyan-600 '>  California</h1>
        </div>
        </div>
        </div>
        <div className="card w-96 pb-9 bg-base-100 shadow-2xl">
            <div className="card-body px-8">
                <p className=''><small> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</small> </p>
            </div>
        <div className="flex items-center justify-center">
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people1} />
            </div>
        </div>
        <div className="pl-4">
        <h2 className='text-xl font-bold'>Abir Rahaman </h2>
        <h1 className='font-bold text-cyan-600 '>  California</h1>
        </div>
        </div>
        </div>
        <div className="card w-96 pb-9 bg-base-100 shadow-2xl">
            <div className="card-body px-8">
                <p className=''><small> It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</small> </p>
            </div>
        <div className="flex items-center justify-center">
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people1} />
            </div>
        </div>
        <div className="pl-4">
        <h2 className='text-xl font-bold'> Abir Rahaman </h2>
        <h1 className='font-bold text-cyan-600 '>  California</h1>
        </div>
        </div>
        </div>
        </div>
       </section>
    );
};

export default Testimonial;