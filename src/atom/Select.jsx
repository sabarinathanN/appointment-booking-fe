import React from "react";
import './input.css';

const Select = (({
    name="",
    options=[],
    value="",
    onChange= () => false
})=>{
    return(
        <>
        <div className="slect-container">
        <select value={value} onChange={(e) => onChange(e.target.value,name)} name={name}>
            {
             options?.map((res,index)=>{
                return( 
                   <option value={res.value} key={index}>{res.label}</option>
                ) 
             })
            }
            
        </select>
        </div>
        </>
    )
});

export default Select