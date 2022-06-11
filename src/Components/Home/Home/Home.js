import React from 'react';
import Contact from '../../Contact/Contact';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Service from '../../Service/Service';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import './Home.css'
const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <InfoCard></InfoCard>
         <Service></Service>
         <MakeAppointment></MakeAppointment>
         <Testimonial></Testimonial>
         <Contact></Contact>
        </div>
    );
};

export default Home;