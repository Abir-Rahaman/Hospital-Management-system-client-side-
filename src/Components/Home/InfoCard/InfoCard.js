import React from 'react';
import icon from '../../../assets/icons/clock.svg'
import icon1 from '../../../assets/icons/marker.svg'
import icon2 from '../../../assets/icons/phone.svg'

const InfoCard = () => {
    return ( <
        div className = "grid grid-rows-3 justify-evenly   lg:grid-rows-1 grid-flow-col mt-8 gap-8 px-16" >
        <
        div className = "card lg:card-side w bg-gradient-to-r from-cyan-500 to-blue-500  lg:pl-8 " >
        <
        figure > < img className = 'mt-8 lg:mt-0'
        src = {
            icon
        }
        alt = "Album" / > < /figure> <
        div className = "card-body text-white" >
        <
        h2 className = "card-title" > Opening Hours < /h2> <
        p > A specialist in healing or medicine.physician.medic.doc.clinician. < /p> <
        /div> <
        /div> <
        div className = "card lg:card-side  lg:pl-8  bg-gradient-to-r from-indigo-500  to-blue-500" >
        <
        figure > < img className = 'mt-8 lg:mt-0'
        src = {
            icon2
        }
        alt = "Album" / > < /figure> <
        div className = "card-body text-white" >
        <
        h2 className = "card-title" > Opening Hours < /h2> <
        p > A specialist in healing or medicine.physician.medic.doc.clinician. < /p> <
        /div> <
        /div> <
        div className = "card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500  lg:pl-8 " >
        <
        figure > < img className = 'mt-8 lg:mt-0'
        src = {
            icon1
        }
        alt = "Album" / > < /figure> <
        div className = "card-body text-white" >
        <
        h2 className = "card-title" > Opening Hours < /h2> <
        p > A specialist in healing or medicine.physician.medic.doc.clinician. < /p> <
        /div> <
        /div> <
        /div>
    );
};

export default InfoCard;