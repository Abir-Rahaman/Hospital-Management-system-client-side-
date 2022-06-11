import React, { useEffect, useState } from 'react';
import chair from '../../assets/images/chair.png'
import banner from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import AvailableAppointment from './../AvailableAppoimtment/AvailableAppoinment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    const [modal , setModal] = useState(null)

    // const [appointments , setAppointments] = useState([])
    const formattedDate = format(date, 'PP');
    console.log(formattedDate);
    const {data:appointments , isLoading,refetch} = useQuery(['available',formattedDate],()=>fetch(`http://localhost:4000/available?date=${formattedDate}`)
        .then(res => res.json())

    )
    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:4000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // },[formattedDate])
    return (
        <div className="">
        <div style={{
            background:`url(${banner})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }} className="hero">
            <div className="hero-content justify-evenly flex-col lg:flex-row-reverse">
                <img  src={chair} className=" w-96 lg:w-5/12 rounded-lg shadow-4xl" alt=''/>
            <div>
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate} />
              <h1 className='font-bold text-center text-cyan-600'> Available Appointment On  {format(date,"PP")} </h1>
            </div>
            </div>

          
          
        </div>
          <div className="mt-20 px-12 grid grid-cols-1 lg:grid-cols-3 gap-11 lg:ml-36">
          {
              appointments?.map(appointment =><AvailableAppointment key={appointment._id} appointment={appointment} setModal={setModal}> </AvailableAppointment>)        
          }
      </div>
      {modal && <BookingModal date={date} modal={modal} refetch={refetch} setModal={setModal}></BookingModal>}
      </div>
    );
};

export default Appointment;