import React, { useState } from "react";
import Input from "../atom/Input";
import Select from "../atom/Select";
import axios from "axios";
import './bookappointment.css';

const BookAppointments = () => {
  const [formData, setFormData] = useState({
    doctorId: "",
    appointmentDate: "",
    reason: "",
    symptoms: "",
    patientId:""
  });

  const [textAreaData,setTextrAreaData] = useState("")

  const changeHandler = (value, name) => {
    setFormData({

        ...formData,
      [name]: value,
    });
  };

  const changeHandlerTextArea = (value) => {
    setFormData({
        ...formData,
        reason: value,
    });
  }

  const onSubmitForm = ((e)=>{
     e.preventDefault();
     axios.post("http://localhost:8080/api/appointments/appointment",formData)
     .then((res)=>{
        if(res){
            console.log("Appointment Booked!")
            alert("You Appointment was booked")
        }
        else{
            alert("Your Appointment Was Failed to book")
        }
     })
  });

  const doctorsList = [
    {
        value:"1",
        label:"sabari"
    },
    {
        value:"2",
        label:"kumar"
    },
    {
        value:"3",
        label:"ramesh"
    },
    {
        value:"4",
        label:"krish"
    }
  ]

  return (
    <>
    <div className="container">
    <div>
      <h1>Book You Appointments</h1>
      </div>
      <form>

      <div className="field-container">
        <label>Select the Patients</label>
        <Select
          name="patientId"
          value={formData.patientId}
          onChange={changeHandler}
          options={doctorsList}
        />
        </div>
      <div className="field-container">
        <label>Select the Doctor</label>
        <Select
          name="doctorId"
          value={formData.doctorId}
          onChange={changeHandler}
          options={doctorsList}
        />
        </div>

         <div className="field-container">
        <label>Select the Appointment Data</label>
        <Input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          placeholder=""
          onChange={changeHandler}
        />
        </div>

        <div className="field-container">
        <label>Explain The Reason</label>
        <div>
        <textarea
          name="reason"
          value={formData.reason}
          placeholder="Explain The Reason"
          rows="4"
          onChange={(e) => changeHandlerTextArea(e.target.value)}
        />
        </div>
        </div>

        <div className="field-container">
        <label>Symptoms  <span>-Explain your Symptoms Ex:"Head Pain,Leg Pain,etc..."</span></label>
       
        <Input
          type="text"
          name="symptoms"
          value={formData.symptoms}
          placeholder=""
          onChange={changeHandler}
        />
        </div>
 
        <div className="field-container">
        <button type="submit" onClick={onSubmitForm }>Book Appointment</button>
          </div>
      </form>
      </div>
    </>
  );
};

export default BookAppointments;
