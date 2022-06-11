import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Appointment/Appointment';
import LogIn from './Components/LogIn/LogIn';
import SignIn from './Components/SignIn/SignIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Components/DashBoard/DashBoard';
import MyAppointment from './Components/DashBoard/MyAppointment';
import MyReview from './Components/DashBoard/MyReview';
import AllUser from './Components/DashBoard/AllUser';
import RequireAdmin from './Components/RequireAuth/RequireAdmin';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import ManageDoctor from './Components/ManageDoctor/ManageDoctor';
import Payment from './Components/DashBoard/Payment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<RequireAuth> <Appointment /> </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth> <DashBoard /> </RequireAuth>}>  
           <Route index element={<MyAppointment></MyAppointment>}></Route>
           <Route path="review" element={<MyReview></MyReview>}></Route>
           <Route path="payment/:id" element={<Payment></Payment>}></Route>
           <Route path="allUser" element={<RequireAuth><AllUser></AllUser>  </RequireAuth>}></Route>
           <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor>  </RequireAdmin>}></Route>
           <Route path="manageDoctor" element={<RequireAdmin><ManageDoctor></ManageDoctor>  </RequireAdmin>}></Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
