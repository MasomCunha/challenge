import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { isEmailValid } from "../utils/validations"

export default function Login(){

    const [userEmail, setUserEmail] = useState<string>("");
    const [hasErrorEmail, setHasErrorEmail] = useState<boolean>(false);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const handleClick = () => {

        if(isEmailValid(userEmail)){
            setHasErrorEmail(false)
        }else{
            setHasErrorEmail(true)
        }

    }


    return(
        <div>
            <Input 
                className="inputLogin" 
                placeholder="insert email" 
                hasError={hasErrorEmail}
                errorMessage="Invalid email"
                value={userEmail} 
                onChange={handleChangeEmail}
                />
            <Button className="buttonSubmitLogin" title="Submit" handleClick={handleClick}/>
        </div>
    )
}