import React from "react";
import ButtonInterface from "../../interface/buttonInterface";

export default function Button({className, title, handleClick}: ButtonInterface){
    return(
        <button
            className={className}
            type="submit"
            title={title}
            onClick={handleClick}
        />
    )
}