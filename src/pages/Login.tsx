import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { isEmailValid } from "../utils/validations";
import { saveLocalStorage } from "../utils/genericFunctions";
import { LOCAL_STORAGE_EMAIL } from "../utils/contants";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { login } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate ()

    const [userEmail, setUserEmail] = useState<string>("");
    const [hasErrorEmail, setHasErrorEmail] = useState<boolean>(false);

    useEffect(() => {
        let email : string | null = localStorage.getItem(LOCAL_STORAGE_EMAIL);

        if (email !== null) {
            setUserEmail(email)
        }

    }, [])

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const handleClick = () => {

        if (isEmailValid(userEmail)) {
            setHasErrorEmail(false);
            saveLocalStorage(LOCAL_STORAGE_EMAIL, userEmail);
            dispatch(login(userEmail))
            navigate("/home")
        } else {
            setHasErrorEmail(true)
        }

    }


    return (
        <div>
            <Input
                className="inputLogin"
                placeholder="Insert email"
                hasError={hasErrorEmail}
                errorMessage="Invalid email"
                value={userEmail}
                onChange={handleChangeEmail}
            />
            <Button className="buttonSubmitLogin" title="Submit" handleClick={handleClick} />
        </div>
    )
}