import React from "react";
import "../../style/successNotification.css"

export default function SuccessNotification(){
    return(
        <div className="successNotificaitonWrapper">
            <span className="successMessage">New post successfully added!</span>
        </div>
    )
}