import React from 'react';
import pic1 from '../../assets/images/pic-1.png'
import pic2 from '../../assets/images/pic-2.png'
import pic3 from '../../assets/images/pic-3.png'
import treatment from '../../assets/images/treatment.png'

const Service = () => {
    return (
        <div className='mt-20  '>
            <h1 className='font-bold text-center text-cyan-600'> OUR SERVICES </h1>
            <h1 className='font-bold text-center text-4xl mt-3'> Services We Provide </h1>
            <div className="grid grid-rows-3 justify-evenly lg:grid-rows-1  grid-flow-col mt-8 gap-8 ">
            <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={pic1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p className='font-bold'><small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small> </p>
            </div>
        </div>
            <div className="card  w-96 bg-base-100 drop-shadow-2xl lg:px-0 PX-20 ">
            <figure className="px-10 pt-10">
                <img src={pic2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p className='font-bold'><small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small> </p>
            </div>
        </div>
            <div className="card w-96 bg-base-100 drop-shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={pic3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p className='font-bold'><small>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</small> </p>
            </div>
        </div>
        </div>


        <div className="card lg:card-side lg:w-9/12 lg:h-96 mx-auto mt-24 px-11 lg:px-0">
        <figure><img src={treatment} alt="Album"/></figure>
            <div className="card-body lg:w-9/12">
               <div className="my-auto">
               <h2 className="card-title text-3xl font-bold  my-auto">Exceptional Dental Care, on Your Terms</h2>
                <p className='mt-4 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               </div>
                <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>


        </div>
    );
};

export default Service;