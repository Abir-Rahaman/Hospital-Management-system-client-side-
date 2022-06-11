import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair.png'
import banner from '../../../assets/images/bg.png'

const Banner = () => {
    return (

        <
        div style = {
            {
                background: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }
        }
        className = "hero mt-8" >
        <
        div className = "hero-content flex-col lg:flex-row-reverse" >
        <
        img src = {
            chair
        }
        className = " w-96 lg:w-5/12 rounded-lg shadow-4xl" / >
        <
        div >
        <
        h1 className = "text-5xl font-bold" > Box Office News! < /h1> <
        p className = "py-6 w-3/4" > Provident cupiditate voluptatem et in .Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi. < /p> <
        button className = "btn btn-primary" > Get Started < /button> <
        /div> <
        /div> <
        /div>
    );
};

export default Banner;