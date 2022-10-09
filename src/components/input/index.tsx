import React from "react";
import InputInterface from "../../interface/inputInterface";
import "../../style/input.css";

export default function Input({ className, placeholder, hasError, errorMessage, value, onChange } : InputInterface){
    return(
        <div className="inputWrapper">
        <input 
            className={className}
            type="input"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            />
        { hasError && <p className="errorMessageInput">{errorMessage}</p> }
        </div>
    )
}