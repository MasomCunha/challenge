import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { isEmailValid } from "../utils/validations";
import { saveLocalStorage } from "../utils/genericFunctions";
import { LOCAL_STORAGE_EMAIL } from "../utils/contants";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { login } from "../redux/actions/authAction";

export default function Login() {

    const dispatch = useAppDispatch()

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
        } else {
            setHasErrorEmail(true)
        }

    }


    return (
        <div>
            <Input
                className="inputLogin"
                placeholder="insert email"
                hasError={hasErrorEmail}
                errorMessage="Invalid email"
                value={userEmail}
                onChange={handleChangeEmail}
            />
            <Button className="buttonSubmitLogin" title="Submit" handleClick={handleClick} />
        </div>
    )
}