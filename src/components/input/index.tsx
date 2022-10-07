import React from "react";
import InputInterface from "../../interface/inputInterface";

export default function Input({ className, placeholder, hasError, errorMessage, value, onChange } : InputInterface){
    return(
        <>
        <input 
            className={className}
            type="input"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            />
        { hasError && <p>{errorMessage}</p> }
        </>
    )
}