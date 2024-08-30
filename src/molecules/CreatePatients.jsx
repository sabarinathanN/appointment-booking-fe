import React, { useState } from "react";
import Input from "../atom/Input";
import "./createPatient.css";
import axios from 'axios'

const CreatePatients = (()=>{


    const [formData,setFormData] = useState(
        {
            name:"",
            location:"",
            mobilenumber:0
        }
    )
    const changeHandler = ((value,name)=>{
        setFormData({
            ...formData,
            [name]:value
        })
         
    });

    const submitFormData  = ((e)=>{
         e.preventDefault();
         axios.post("http://localhost:8080/api/patients/patient/",formData)
         .then((res)=>{
              console.log("response",res)
         })
    })
    return(
        <>
        <div className="container">
        <form>
            <div className="field-container">
            <label>Patient Name</label>
            <div>
            <Input 
            name="name" 
            placeholder="Patients Name"
            onChange={changeHandler}
            value={formData.name}
            type={"text"} 
            />
            </div>
            </div>
            <div  className="field-container">
              <label>Patient Mobile Number</label>
              <div>
            <Input 
            name="mobilenumber" 
            placeholder="Enter Mobile Number"
            onChange={changeHandler}
            value={formData.mobilenumber}
            type={"number"} 
            />
            </div>
            </div>
            <div  className="field-container">
              <label>Patient Location</label>
              <div>
            <Input 
            name="location" 
            placeholder="Patients Location"
            onChange={changeHandler}
            value={formData.location}
            type={"text"} 
            />
            </div>
            </div>

            <div  className="field-container">
                <button onClick={submitFormData}>Create Patient</button>
            </div>
        </form>
        </div>
        </>
    )
});

export default CreatePatients;