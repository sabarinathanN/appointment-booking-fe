import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import BookAppointments from './molecules/BookAppointments';
import CreatePatients from './molecules/CreatePatients';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className='nav-bar-items'>
          <li className='nav-links'>
            <Link to={"/"} >Home</Link>
            </li>
            <li className='nav-links'>
              <Link to={"/bookappointments"} >Book Appointments</Link>
            </li>
            <li className='nav-links'>
              <Link to={"/createPatients"} >Add Patients</Link>
            </li>
            
          </ul>
        </nav>
        <div className='app-title'>
        <h1>Advanced Patient Booking Application</h1>
        </div>


        <Routes>
          <Route path={"/bookappointments"} element={<BookAppointments />} />
          <Route path= {"/createPatients"} element= {<CreatePatients/>}/>
        </Routes>


      </div>
    </Router>
  );
}

export default App;
