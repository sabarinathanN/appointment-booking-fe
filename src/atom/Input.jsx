import React from "react";
import './input.css';

const Input = ({
  type = "",
  name = "",
  value = "",
  placeholder = "",
  onChange = () => false,
  ...props
}) => {
  return (
    <>
    <div className="input-container">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, name)}
        // props={...props}
      />
      </div>
    </>
  );
};

export default Input;
